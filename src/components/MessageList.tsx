import { MessageSquarePlus } from 'lucide-react';
import React, { useRef, useEffect } from 'react';
import { useChatContext } from '../context/ChatContext';
import Message from './Message';
import './MessageList.css';

const MessageList: React.FC = () => {
  const { messages, createNewChat } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []); // Removed unnecessary dependency

  return (
    <div className="message-list-container">
      {messages.length === 0 ? (
        <div className="empty-chat-container">
          <div className="empty-chat-text">
            <h3>AI Chat Assistant</h3>
            <p>Start a new conversation</p>
            <button type="button" onClick={createNewChat} className="new-chat-button">
              <MessageSquarePlus size={20} />
              <span>New Chat</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="messages-wrapper">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default MessageList;