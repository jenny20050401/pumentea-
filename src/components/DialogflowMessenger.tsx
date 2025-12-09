import { useEffect } from 'react';

// 👇 請確認有這一行！這是定義元件的地方
const DialogflowMessenger = () => {
  useEffect(() => {
    const scriptUrl = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <style>{`
        df-messenger {
          z-index: 99999;
          position: fixed;
          bottom: 20px;
          inset-inline-end: 20px; 
          
          --df-messenger-font-color: #333;
          --df-messenger-font-family: 'Noto Sans TC', sans-serif;
          --df-messenger-primary-color: #d4a974; 
          --df-messenger-chat-background: #ffffff;
          --df-messenger-message-user-background: #a7b7a7;
          --df-messenger-message-bot-background: #f4f4f4;

          --df-messenger-chat-window-width: 350px;
          --df-messenger-chat-window-height: 500px;
          --df-messenger-chat-window-offset-x: 0px;
          --df-messenger-chat-window-offset-y: 0px;
        }

        @media (max-width: 768px) {
          df-messenger {
            bottom: 10px;
            inset-inline-end: 10px;
            --df-messenger-chat-window-width: 90vw;
            --df-messenger-chat-window-height: 80vh;
          }
        }
      `}</style>
      
      <df-messenger
        location="us-central1"
        project-id="digital-marketing-479301"
        agent-id="b9f45bfb-6366-4da7-b420-28c2f5c82dc6"
        language-code="zh-tw"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="🍵 普門線上客服"></df-messenger-chat-bubble>
      </df-messenger>
    </>
  );
};

// 👇 請確認有這一行！
export default DialogflowMessenger;