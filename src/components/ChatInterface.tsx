import { useState } from 'react';
import Header from './Header';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Sidebar from './Sidebar';

const ChatInterface: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-col h-screen backdrop-blur-xl bg-white/10">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <MessageList />
        <MessageInput />
      </div>
    </>
  );
};

export default ChatInterface;