import type React from 'react';
import { PanelLeft  } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className='flex items-start'>
          <button
            type="button"
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <PanelLeft  size={20} className="text-white" />
          </button>
    </header>
  );
};

export default Header;