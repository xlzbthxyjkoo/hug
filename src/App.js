import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faPersonBreastfeeding } from '@fortawesome/free-solid-svg-icons';
import Mappage from './Map/Mappage';

const Header = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #F8DAE2;

  .logo {
    margin: 0 1rem;
    font-size: 2rem;
  }

  .header__menulist {
    list-style: none;
    display: flex;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
  }

  .header__right div {
    margin: 0 1rem;
  }

  li {
    padding: 0 1rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  ${props => props.mediaQuery && css`
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;

      .header__right {
        display: ${props => (props.userToggled ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: #F8DAE2;
      }

      .header__menulist {
        display: ${props => (props.isToggled ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: #F8DAE2;
      }

      .header__menulist li,
      .header__right li {
        margin: 1rem 0;
        padding: 0;
      }

      .toggle {
        display: block;
      }

      .user {
        display: block;
      }
    }
  `}
`;

const MenuBlock = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: ${props => (props.isToggled ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #F8DAE2;
`;

const UserMenuBlock = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  display: ${props => (props.userToggled ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #F8DAE2;
`;

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsToggled(false);
      setUserToggled(false);
    }
  };

  const Mappage = () => {

    document.location.href('/Map/Mappage.js')

}

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Header mediaQuery={window.innerWidth <= 768} isToggled={isToggled} userToggled={userToggled}>
      {/* 햄버거 버튼(bar) */}
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
      </div>

      {/* Apple 로고 */}
      <div className="logo">
        <FontAwesomeIcon icon={faPersonBreastfeeding} />
      </div>

      {/* User 버튼 */}
      <div
        className="user"
        onClick={() => {
          setUserToggled(!userToggled);
        }}
      >
        <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
      </div>

      {/* 메뉴 리스트 */}
      <MenuBlock isToggled={isToggled}>
        <ul className="header__menulist">
          <li onClick={Mappage}>Map</li>
          <li>Shop</li>
          <li>iPhone</li>
          <li>고객지원</li>
        </ul>
      </MenuBlock>

      {/* User 메뉴 리스트 */}
      <UserMenuBlock userToggled={userToggled}>
        <ul className="header__right">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </UserMenuBlock>
    </Header>
  );
}

export default App;