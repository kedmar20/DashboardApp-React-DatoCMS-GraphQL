import styled from "styled-components";

export const StyledButton = styled.button`
   align-items: center;
   background-color: ${({ theme }) => theme.colors.lightGrey};
   border: none;
   border-radius: 50px;
   color: red;
   cursor: pointer;
   display: flex;
   height: 25px;
   justify-content: center;
   margin: 0 10px;
   width: 25px;

   svg {
      height: 100%;
      width: 100%;
   }
`;
