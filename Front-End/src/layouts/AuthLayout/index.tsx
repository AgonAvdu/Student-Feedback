import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Loading from "../../components/UIElements/Loader";

import Logo from '../../assets/icons/logo.svg'
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/auth/selectors";

const AuthLayout: React.FC = () => {

  const navigate = useNavigate();
  const user = useAppSelector(getUser);
  useEffect(() => {
    user && navigate("/profile")
  },[user])

  return (
    <div className="auth">
      <div className="auth__logo--wrapper">
        <img className="auth__logo" src={Logo} alt="logo" />
      </div>
      <Suspense fallback={<Loading loading={true} />}>
        <div className="auth__form">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
export default AuthLayout;
