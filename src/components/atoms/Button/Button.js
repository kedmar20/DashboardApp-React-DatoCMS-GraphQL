import styled from "styled-components";

export const Button = styled.button`
   background-color: ${({ theme }) => theme.colors.lightPurple};
   border: none;
   border-radius: 20px;
   color: ${({ theme }) => theme.colors.darkGrey};
   cursor: pointer;
   font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.l : fontSize.s)};
   font-weight: normal;
   margin: 15px 10px;
   padding: ${({ isBig }) => (isBig ? "10px 30px" : "4px 20px")};
`;
