import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";
import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
   justify-content: center;
   padding: 15px 0px;
   width: 220px;

   ${Label} {
      margin: 1px 18px;
   }

   ${Input} {
      margin-left: 7px;
      padding-left: 5px;
   }

   select,
   option {
      font-size: 1rem;
      width: 60%;
   }
`;
