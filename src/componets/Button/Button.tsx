import styles from "./Button.module.css";

interface props {
  children: string;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
}

const Button = ({ children, color = "secondary", onClick }: props) => {
  return (
    <button className={[styles.btn, styles[`btn-${color}`]].join(' ')} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
