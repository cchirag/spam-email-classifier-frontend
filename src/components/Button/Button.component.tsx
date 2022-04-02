import "./Button.styles.css";

interface ButtonProps {
  variant: "primary" | "secondary";
  onClick: () => void;
  disabled: boolean;
  isWorking: boolean;
  label: string;
  type: "submit" | "button";
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={
        props.variant == "primary"
          ? "button button-primary"
          : "button button-secondary"
      }
      type={props.type}
    >
      {props.isWorking ? "Hmm..." : props.label}
    </button>
  );
};

export default Button;
