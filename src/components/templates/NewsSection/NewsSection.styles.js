import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import styled from "styled-components";

export const Wrapper = styled.div`
   align-items: center;
   color: ${({ theme }) => theme.colors.white};
   display: flex;
   flex-direction: column;
   grid-row: 2/3;
   grid-column: 3/4;
   justify-content: flex-start;
   overflow-y: scroll;
   padding: 40px;
`;

export const NewsSectionHeader = styled.h2`
   margin-right: auto;
`;

export const ArticleWrapper = styled(ViewWrapper)`
   border-radius: 10px;
   color: ${({ theme }) => theme.colors.black};
   font-size: ${({ theme }) => theme.fontSize.m};
   margin: 20px 0;
   max-width: unset;
   padding: 20px;
   width: 100%;

   p {
      line-height: 1.6;
   }

   button {
      cursor: auto;
   }
`;

export const TitleWrapper = styled.div`
   h3 {
      font-size: ${({ theme }) => theme.fontSize.xl};
   }
   p {
      font-size: ${({ theme }) => theme.fontSize.m};
      margin-bottom: 5px;
   }
`;

export const ContentWrapper = styled.div`
   align-items: flex-start;
   display: flex;

   img {
      margin-left: 25px;
      max-width: 200px;
      object-fit: contain;
   }
`;
