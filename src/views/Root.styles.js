import styled from "styled-components";

export const Wrapper = styled.div`
   align-items: center;
   background-color: #4a465f;
   border-right: 1px solid ${({ theme }) => theme.colors.lightPurple};
   display: flex;
   grid-column: 2/3;
   grid-row: 2/3;
   height: 100%;
   justify-content: center;
   width: 100%;
`;
