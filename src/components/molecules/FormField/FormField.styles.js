import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";
import styled from "styled-components";

export const Wrapper = styled.div`
   width: 220px;
   /* height: 55px; */
   /* margin: auto; */
   padding: 15px 0px;
   /* background-color: ${({ theme }) => theme.colors.lightPurple}; */
   /* border-radius: 10px; */
   display: flex;
   flex-direction: column;
   justify-content: center;
   /* align-items: center; */
   gap: 5px;
   /* border: 1px solid yellow; */

   ${Label} {
      /* color: red; */
      margin: 1px 18px;
   }

   ${Input} {
      margin-left: 7px;
   }
`;
