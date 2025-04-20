import React, { useState } from 'react';
import { useChatContext } from '../context/ChatContext';
import { Send } from 'lucide-react';

const MessageInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { addMessage, isLoading } = useChatContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() && !isLoading) {
      addMessage(input.trim(), 'user');
      setInput('');
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isLoading ? "AI is thinking..." : "Send a message"}
            disabled={isLoading}
            className="w-full rounded-lg backdrop-blur-xl bg-white/20 border-none py-4 px-4 pr-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-70 transition"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 rounded-lg p-2 text-white/60 hover:text-white disabled:text-white/30 transition-colors focus:outline-none"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;