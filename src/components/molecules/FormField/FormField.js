import React from "react";
import PropTypes from "prop-types";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import { Wrapper } from "./FormField.styles";

const FormField = ({ onChange, checked, value, name, id, label, type = "text", ...props }) => {
   // const validationFunc = (value) => {
   //    value.length < 2 ? console.log("too short - try again") : console.log("it's ok");
   // };
   return !(id === "fakultaet") ? (
      <Wrapper>
         <Label htmlFor={id}>{label}</Label>
         <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} checked={checked} />
         {console.log(value)}
      </Wrapper>
   ) : (
      <Wrapper>
         <Label htmlFor={id}>{label}</Label>
         <select name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label}>
            <option selected value=""></option>
            <option value="Navigation">Navigation</option>
            <option value="Ingenieurwesen" className="option">
               Ingenieurwesen
            </option>
            <option value="Maschinenbau" className="option">
               Maschinenbau
            </option>
            <option value="Kapitänsschule">Kapitänsschule</option>
         </select>
      </Wrapper>
   );
};

FormField.propTypes = {
   label: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   type: PropTypes.string,
};

export default FormField;
