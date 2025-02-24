interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-[#111111] rounded-lg max-w-2xl w-full mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
