import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClick: () => void;
}

const Alert = ({ children, onClick }: props) => {
  return (
    <div className="alert alert-info alert-dismissible">
      {children}
      <button onClick={onClick} className="btn-close">
      </button>
    </div>
  );
};
export default Alert;
