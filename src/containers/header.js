import React from "react";
import Header from "../components/header";
import OptForm from "../components/opt-form/styles";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer;
