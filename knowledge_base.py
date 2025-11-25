import os
from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
    UnstructuredWordDocumentLoader,
    BSHTMLLoader,
)
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

# --- 常數設定 ---
DB_DIRECTORY = "db"
DATA_DIRECTORY = "data"
EMBEDDING_MODEL = "bge-large-zh-v1.5"

# 檔案類型對應的載入器
DOCUMENT_MAP = {
    ".pdf": PyPDFLoader,
    ".docx": UnstructuredWordDocumentLoader,
    ".txt": TextLoader,
    ".md": TextLoader,
    ".html": BSHTMLLoader,
}

class KnowledgeBase:
    """
    管理知識庫的核心類別，包含文件載入、切割與向量化。
    """
    def __init__(self, db_directory=DB_DIRECTORY, embedding_model_name=EMBEDDING_MODEL):
        self.db_directory = db_directory
        self.embedding_model = HuggingFaceEmbeddings(model_name=embedding_model_name)
        self.vector_store = self._load_vector_store()

    def _load_vector_store(self):
        """載入已存在的向量資料庫，若不存在則初始化一個新的。"""
        if os.path.exists(self.db_directory):
            return Chroma(persist_directory=self.db_directory, embedding_function=self.embedding_model)
        return None

    def get_retriever(self, search_kwargs={"k": 5}):
        """獲取檢索器 (Retriever)。"""
        if self.vector_store:
            return self.vector_store.as_retriever(search_kwargs=search_kwargs)
        return None

    def add_documents(self, uploaded_files):
        """處理上傳的檔案，並將其加入知識庫。"""
        if not uploaded_files:
            return

        all_chunks = []
        for file in uploaded_files:
            # 將上傳的檔案暫存到 data 資料夾
            file_path = os.path.join(DATA_DIRECTORY, file.name)
            with open(file_path, "wb") as f:
                f.write(file.getbuffer())

            ext = os.path.splitext(file.name)[1]
            if ext in DOCUMENT_MAP:
                loader = DOCUMENT_MAP[ext](file_path)
                documents = loader.load()
                text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
                chunks = text_splitter.split_documents(documents)
                all_chunks.extend(chunks)

        if all_chunks:
            self.vector_store = Chroma.from_documents(
                documents=all_chunks,
                embedding=self.embedding_model,
                persist_directory=self.db_directory
            )
            self.vector_store.persist()
