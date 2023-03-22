import React from "react";
import PropTypes from "prop-types";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import { Wrapper } from "./FormField.styles";

const FormField = ({ onChange, value, name, id, label, type = "text", ...props }) => {
   return !(id === "attendance") ? (
      <Wrapper>
         <Label htmlFor={id}>{label}</Label>
         <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
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
