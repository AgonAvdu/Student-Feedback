import { Suspense, useEffect, useRef } from "react";
import { Outlet, NavLink, Link, useNavigate, Navigate, useLocation } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";

// import { logoutUser } from "../api/auth/logout";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeUser } from "../../store/auth/slice";
import { getUser } from "../../store/auth/selectors";

import Loading from "../../components/UIElements/Loader/index";
import SideBar from "../../components/SideBar";


import profile from '../../assets/icons/user.png'
import { removeToken } from "../../helpers";



/* eslint-disable @typescript-eslint/no-non-null-assertion */

const DashboardLayout: React.FC = () => {

  const mobileNavRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const user = useAppSelector(getUser)

  if (!user) {
    return <Navigate to="/login" />;
  }


  const onLogOutClick = () => {
    dispatch(removeUser())
    navigate('/login')
  }

  return (
    <div className="dashboard">
      <Loading loading={false} />
      <SideBar onLogout={onLogOutClick} />
      <div className="dashboard__main">
        <div className="row dashboard-topBar justify-content-end align-items-center">
          <Link to="/profile" className="col-1 dashboard-user">
            <img className="dashboard-user__icon" src={profile} alt="profile" />
            <span className="dashboard-user__label">{user?.name}</span>
          </Link> 
        </div>
        <div className="dashboard__content">
          <Suspense fallback={<Loading loading={true} />}>
            <Outlet />
          </Suspense>
        </div>

      </div>
    </div>
  );
};
export default DashboardLayout;
