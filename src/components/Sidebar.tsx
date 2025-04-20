import { Clock, MessageSquarePlus, PanelLeft, Trash2 } from "lucide-react";
import type React from "react";
import { useChatContext } from "../context/ChatContext";

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { chats, selectedChat, setSelectedChat, createNewChat, deleteChat } =
    useChatContext();

  return (
    <div
      className={`fixed inset-y-0 left-0 w-72 backdrop-blur-2xl bg-black/30 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-white/10 flex flex-row gap-4 ">
          <button
            type="button"
            onClick={onClose}
            className="px-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            <PanelLeft size={20} className="text-white" />
          </button>
          <button
            type="button"
            onClick={createNewChat}
            className="gap-2 px-4 py-3 text-white  rounded-lg hover:bg-white/10 transition-colors"
          >
            <MessageSquarePlus size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`group relative flex items-center p-3 rounded-lg transition-colors ${
                selectedChat === chat.id
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedChat(chat.id);
                  if (window.innerWidth < 768) onClose();
                }}
                className="flex-1 text-left"
              >
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-sm font-medium truncate">
                    {chat.lastMessage || "New Chat"}
                  </span>
                </div>
                <p className="text-xs text-white/50 mt-1 truncate">
                  {new Date(chat.timestamp).toLocaleString()}
                </p>
              </button>
              <button
                type="button"
                onClick={() => deleteChat(chat.id)}
                className="absolute right-2 opacity-0 group-hover:opacity-100 p-2 text-white/50 hover:text-white transition-opacity"
                aria-label="Delete chat"
              >
                <Trash2 size={16} color="red" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
