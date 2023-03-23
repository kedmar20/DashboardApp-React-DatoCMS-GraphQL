import styled from "styled-components";

export const Input = styled.input`
   border: 1px solid ${({ theme }) => theme.colors.lightPurple};
   border-radius: 25px;
   box-sizing: border-box;
   box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
   width: 50%;

   &:focus {
      box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
      outline: none;
   }
`;
