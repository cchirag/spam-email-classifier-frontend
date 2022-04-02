import "./AuthenticationPage.styles.css";
import AuthenticationImage from "../../../assets/images/authentication.svg";
import InputField from "../../../components/InputField/InputField.component";
import { useState } from "react";
import Button from "../../../components/Button/Button.component";

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="auth-page-container">
      <div className="auth-page-left-side">
        <img src={AuthenticationImage} />
      </div>
      <div className="auth-page-right-side">
        <form className="auth-page-form" onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <InputField
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
          <InputField
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          <Button
            disabled={false}
            isWorking={false}
            label="Sign In"
            onClick={() => {}}
            variant="primary"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
