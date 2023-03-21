import React from "react";
import { Wrapper, StyledLink } from "./Navigation.styles";

const Navigation = () => {
   return (
      <Wrapper>
         <StyledLink to="/">Studentenliste</StyledLink>
         <StyledLink to="/add-user">Studenten Hinzufügen</StyledLink>
      </Wrapper>
   );
};

export default Navigation;
