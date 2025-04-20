import React, { createContext, useState, useEffect, useContext } from 'react';
import { Message, ChatContextType, Chat } from '../types';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  
  const [chats, setChats] = useState<Chat[]>(() => {
    const savedChats = localStorage.getItem('chats');
    return savedChats ? JSON.parse(savedChats) : [];
  });
  
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [messages, chats]);

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      lastMessage: '',
      timestamp: Date.now(),
    };
    setChats(prev => [newChat, ...prev]);
    setSelectedChat(newChat.id);
    setMessages([]);
  };

  const deleteChat = (id: string) => {
    setChats(prev => prev.filter(chat => chat.id !== id));
    if (selectedChat === id) {
      setSelectedChat(null);
      setMessages([]);
    }
  };

  const generateAIResponse = (userMessage: string): Promise<string> => {
    return new Promise((resolve) => {
      const responses = [
        "I'm just a simple demo, but I'd be happy to help with that!",
        "That's an interesting question. In a real app, I would provide a thoughtful answer.",
        "Thanks for your message! This is a demonstration of the UI.",
        `I received your message: "${userMessage}". In a production app, this would connect to a real AI API.`,
        "I'm a demo chatbot. I can show you how the UI works, but I don't have actual AI capabilities.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const delay = 1000 + Math.random() * 2000;
      setTimeout(() => resolve(randomResponse), delay);
    });
  };

  const addMessage = async (content: string, sender: 'user' | 'ai') => {
    if (!selectedChat && sender === 'user') {
      createNewChat();
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);

    if (sender === 'user') {
      setChats(prev => prev.map(chat => 
        chat.id === selectedChat 
          ? { ...chat, lastMessage: content, timestamp: Date.now() }
          : chat
      ));

      setIsLoading(true);
      try {
        const aiResponse = await generateAIResponse(content);
        
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: aiResponse,
          sender: 'ai',
          timestamp: Date.now(),
        };
        
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error generating AI response:', error);
        setIsLoading(false);
      }
    }
  };

  return (
    <ChatContext.Provider value={{ 
      messages, 
      addMessage, 
      isLoading, 
      selectedChat, 
      setSelectedChat,
      chats,
      createNewChat,
      deleteChat
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};