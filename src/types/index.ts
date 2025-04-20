export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: number;
}

export interface ChatContextType {
  messages: Message[];
  addMessage: (content: string, sender: 'user' | 'ai') => void;
  isLoading: boolean;
  selectedChat: string | null;
  setSelectedChat: (id: string | null) => void;
  chats: Chat[];
  createNewChat: () => void;
  deleteChat: (id: string) => void;
}

export interface Chat {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: number;
}