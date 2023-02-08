import {useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';

import topLogo from "../../assets/icons/logo.svg";
import profile from "../../assets/icons/resume.png";
import group from "../../assets/icons/group.png";
import logout from "../../assets/icons/icon-logout.svg";
import subjects from "../../assets/icons/subjects.svg";


interface IAppProps {
  onLogout: () => void
}

const NavItems = [
    {
      logo: group,
      path: `/users`,
      alt: `users`,
      label: `Users`,
    },
    {
      logo: subjects,
      path: `/subjects`,
      alt: `subjects`,
      label: `Subjects`,
    },
  ];

const SideBar: React.FC<IAppProps> = ({onLogout}) => {
  const mobileNavRef = useRef<HTMLInputElement>(null);

  return (
    <aside className={`dashboard__sidebar`}>
        <div className="dashboard__top">
          <div className="dashboard__header">
            <input
              type="checkbox"
              ref={mobileNavRef}
              className="dashboard__mobile-checkbox"
              id="navi-toggle"
            />
            <label
              htmlFor="navi-toggle"
              className="dashboard__mobile-button"
            >
              <span className="dashboard__mobile-icon">&nbsp;</span>
            </label>
            <Link to="/profile">
              <div className='dashboard__logo-container'>
                <picture >
                  <source
                    media="(max-width: 56.25em)"
                    srcSet={topLogo}
                    width="26px"
                    height="32px"
                  />
                  <img className='dashboard__logo' src={topLogo} alt="dashboard logo" />
                </picture>
              </div>
            </Link>
            <nav className="dashboard__mobile-nav" >
              <div className="dashboard__mobile-navItems">
                {NavItems.map(item => (
                  <NavLink
                    key={item.alt}
                    to={`${item.path}`}
                    className={({ isActive }) => {
                      return `dashboard__link ${isActive && "dashboard__link-active"} `;
                    }}
                    onClick={() => mobileNavRef.current!.checked = false}
                  >
                    <img src={item.logo} alt={item.alt} className={`dashboard__link--image `} />
                    <div className={`dashboard__link--label `}>{item.label}</div>
                  </NavLink>
                ))}
                <button className={`button button__logout dashboard__mobile-logout `}>
                  <img className='dashboard__logout-icon' src={logout} alt="logout" />
                  <div className='dashboard__logout-label'>Log out</div>
                </button>
              </div>

            </nav>
          </div>
          <nav className="dashboard__nav">
            {NavItems.map(item => (
              <NavLink
                key={item.alt}
                to={`${item.path}`}
                className={({ isActive }) => {
                  return `dashboard__link ${isActive && "dashboard__link-active"} `;
                }}
              >
                <img src={item.logo} alt={item.alt} className={`dashboard__link--image `} />
                <div className={`dashboard__link--label `}>{item.label}</div>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="dashboard__bottom">
          <div className={`dashboard__logout-container `}>
            <button onClick={onLogout} className={`button button__logout dashboard__logout `}>
              <img className='dashboard__logout-icon' src={logout} alt="logout" />
              <div className='dashboard__logout-label'>Log out</div>
            </button>
          </div>
        </div>
      </aside>
  )
};

export default SideBar;
