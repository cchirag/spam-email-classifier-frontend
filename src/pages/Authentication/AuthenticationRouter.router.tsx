import { Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CurrentUserState } from "../../states/CurrentUserState.recoil";
import AuthenticationPage from "./AuthenticationPage/AuthenticationPage";

const AuthenticationRouter = () => {
  const currentUser = useRecoilValue(CurrentUserState);

  return (
    <Routes>
      <Route
        path=""
        element={
          currentUser == null ? <AuthenticationPage /> : <Navigate to="email" />
        }
      />
    </Routes>
  );
};

export default AuthenticationRouter;
