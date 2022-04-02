import "./InputField.styles.css";

interface InputFieldProps {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="input-field"
      value={props.value}
    />
  );
};

export default InputField;
