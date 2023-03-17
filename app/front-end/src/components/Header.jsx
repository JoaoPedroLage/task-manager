import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/header.css';

const Header = ({
  page,
  logged,
  setLogin,
}) => {
  const logoff = () => {
    localStorage.removeItem('user');
    setLogin(false);
  };

  return (
    <header className="common-header">
      <h1 data-testid="header__title">{ page }</h1>
      <div className="buttons-content">
        {
          (logged)
            && (
              <button type="button" onClick={ () => logoff() }>
                Sair
                <img src="exitToAppImg" alt="Sair do aplicativo" />
              </button>
            )
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  page: PropTypes.string.isRequired,
  logged: PropTypes.bool,
  setLogin: PropTypes.func,
};

Header.defaultProps = {
  logged: undefined,
  setLogin: undefined,
};

export default Header;
