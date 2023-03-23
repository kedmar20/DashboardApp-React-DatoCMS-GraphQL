import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
   background-color: #4a465f;
   border-right: 1px solid ${({ theme }) => theme.colors.lightPurple};
   display: flex;
   flex-direction: column;
   grid-column: 1/2;
   grid-row: 2/3;
   height: 100%;
   justify-content: flex-start;
   padding: 90px 0;
   position: relative;
   width: 100%;
`;

export const StyledLink = styled(NavLink).attrs({
   className: "active-link",
})`
   color: ${({ theme }) => theme.colors.darkGrey};
   font-weight: bold;
   margin: 15px 20px 15px auto;
   position: relative;
   text-align: right;
   text-decoration: none;

   &.active {
      color: ${({ theme }) => theme.colors.lightPurple};
      &::after {
         opacity: 1;
         width: 10px;
      }
   }

   &::after {
      background-color: ${({ theme }) => theme.colors.lightPurple};
      content: "";
      height: 100%;
      opacity: 0;
      position: absolute;
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.4s ease-in-out;
      width: 20px;
   }
`;
