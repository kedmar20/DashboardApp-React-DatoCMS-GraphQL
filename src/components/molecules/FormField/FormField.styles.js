import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";
import styled from "styled-components";

export const Wrapper = styled.div`
   width: 220px;
   padding: 15px 0px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   /* align-items: center; */
   gap: 5px;

   ${Label} {
      margin: 1px 18px;
   }

   ${Input} {
      margin-left: 7px;
      padding-left: 5px;
   }

   select,
   option {
      width: 60%;
      font-size: 1rem;
   }
`;
