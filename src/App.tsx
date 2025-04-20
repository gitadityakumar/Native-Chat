import { ChatProvider } from './context/ChatContext';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700">
      <ChatProvider>
        <ChatInterface />
      </ChatProvider>
    </div>
  );
}

export default App