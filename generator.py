from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from langchain_community.llms import Ollama

import prompts

class Generator:
    """
    負責生成內容的 RAG 鏈。
    """
    def __init__(self, retriever):
        self.retriever = retriever
        self.llm = Ollama(model="llama3") # 可替換成您想用的本地模型

    def _create_rag_chain(self, prompt_template):
        """根據指定的提示模板建立一個 RAG 鏈。"""
        
        def format_docs(docs):
            return "\n\n".join(doc.page_content for doc in docs)

        return (
            {"context": self.retriever | format_docs, "question": RunnablePassthrough()}
            | ChatPromptTemplate.from_template(prompt_template)
            | self.llm
            | StrOutputParser()
        )

    def get_chain_for_mode(self, mode):
        """根據不同模式返回對應的 RAG 鏈。"""
        if mode == "履歷重點優化":
            return self._create_rag_chain(prompts.BULLET_POINT_TEMPLATE)
        elif mode == "客製化求職信":
            return self._create_rag_chain(prompts.COVER_LETTER_TEMPLATE)
        elif mode == "模擬面試教練":
            return self._create_rag_chain(prompts.INTERVIEW_PREP_TEMPLATE)
        else: # 預設模式
            return self._create_rag_chain(prompts.DEFAULT_RAG_TEMPLATE)
