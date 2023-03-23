import styled from "styled-components";

export const Wrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 25px;
   box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
   margin: 10px;
   width: 100%;
   max-width: 500px;
   padding: 40px 50px;
`;

export const StyledList = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
`;

export const StyledTitle = styled.h1`
   color: ${({ theme }) => theme.colors.lightGrey};
   font-size: ${({ theme }) => theme.fontSize.xl};
`;
