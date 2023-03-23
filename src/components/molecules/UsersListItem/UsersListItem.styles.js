import styled from "styled-components";

export const Wrapper = styled.li`
   align-items: center;
   display: flex;
   position: relative;

   &:not(:last-child)::after {
      background-color: lightgrey;
      bottom: 0;
      content: "";
      height: 1px;
      position: absolute;
      width: 100%;
   }
`;

export const Styledsemester = styled.div`
   align-items: center;
   background: ${({ theme, value }) => {
      if (value > 3) return theme.colors.error;
      if (value > 2) return theme.colors.warning;
      if (value > 1) return theme.colors.success;
      return theme.colors.grey;
   }};
   border-radius: 8px;
   color: ${({ theme }) => theme.colors.white};
   display: flex;
   flex-direction: column;
   font-size: ${({ theme }) => theme.fontSize.m};
   font-weight: normal;
   gap: 1px;
   height: 45px;
   justify-content: center;
   width: 85px;

   p {
      margin: 0;
   }
`;

export const StyledInfo = styled.div`
   padding: 25px 20px;

   p {
      color: ${({ theme }) => theme.colors.white};
      margin: 0;
   }

   p:first-child {
      align-items: center;
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: bold;
   }

   p:last-child {
      font-size: ${({ theme }) => theme.fontSize.m};
   }
`;
