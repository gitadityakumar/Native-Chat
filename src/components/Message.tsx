import React from 'react';
import { Message as MessageType } from '../types';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-start gap-4">
          <div className={`w-8 h-8 rounded-sm flex items-center justify-center backdrop-blur-sm ${
            message.sender === 'user' ? 'bg-white/20' : 'bg-white/30'
          }`}>
            <span className="text-white text-sm font-semibold">
              {message.sender === 'user' ? 'U' : 'AI'}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              {message.content}
            </p>
            <span className="text-xs text-white/60 block mt-2">
              {formattedTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;