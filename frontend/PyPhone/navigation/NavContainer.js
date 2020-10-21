import React, {useRef} from 'react';
import MainSwitch from './MainSwitch';

const NavContainer = (props) => {
  const navRef = useRef();

  //tutaj w useEffect sprawdzam czy zalogowany i jezeli nie to naviguje na auth

  return <MainSwitch ref={navRef} />;
};

export default NavContainer;
