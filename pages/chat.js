import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Chat.module.css';
import Link from 'next/link';

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm Zeemo, your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        })
      });

      const data = await response.json();
      const assistantMessage = data.choices[0].message;
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to the AI service." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const startNewChat = () => {
    setMessages([{ role: 'assistant', content: "Hello! I'm Zeemo, your AI assistant. What would you like to discuss?" }]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Zeemo AI Chat</title>
      </Head>

      <div className={styles.sidebar}>
        <button className={styles.newChatBtn} onClick={startNewChat}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          New chat
        </button>
      </div>
      
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
          <div className={styles.chatTitle}>Zeemo AI</div>
        </div>
        
        <div className={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div key={index} className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.botMessage}`}>
              {msg.role === 'assistant' && <div className={styles.avatar}>Z</div>}
              <div className={styles.messageContent}>
                {msg.role === 'assistant' && <div className={styles.botName}>Zeemo</div>}
                <div>{msg.content}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={`${styles.message} ${styles.botMessage}`}>
              <div className={styles.avatar}>Z</div>
              <div className={styles.messageContent}>
                <div className={styles.botName}>Zeemo</div>
                <div className={styles.typingIndicator}>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                  <div className={styles.typingDot}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className={styles.inputContainer}>
          <form onSubmit={handleSubmit} className={styles.inputBox}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Zeemo..."
              className={styles.userInput}
              autoComplete="off"
            />
            <button type="submit" className={styles.sendButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
          <div className={styles.footer}>
            <a href="https://dvzn.lol" target="_blank" rel="noopener noreferrer">made with ❤ by dvzn</a>
          </div>
        </div>
      </div>
    </div>
  )
}