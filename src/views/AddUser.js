import React, { useContext } from "react";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { Title } from "components/atoms/Title/Title";
import { UsersContext } from "providers/UsersProvider";
import { useForm } from "hooks/useForm";

const initialFormState = {
   name: "",
   fakultaet: "",
   semester: "",
   consent: false,
   error: "",
};
//

//
const AddUser = () => {
   const context = useContext(UsersContext);
   const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState);

   const handleSubmitUser = (e) => {
      e.preventDefault();
      console.log(formValues.fakultaet);
      if (!formValues.consent) {
         handleThrowError("Bitte Zustimmen!");
      } else if (!(formValues.name.length > 2)) {
         handleThrowError(`"Name" ist leider zu kurz! Geben Sie bitte noch mindestens ${3 - formValues.name.length} Zeichen ein!`);
      } else if (!(+formValues.semester > 1 && +formValues.semester < 4)) {
         handleThrowError(`"Semester" ist falsch geschrieben`);
      } else if (!formValues.fakultaet) {
         handleThrowError(`wähle "Fakultät" !`);
      } else {
         context.handleAddUser(formValues);
         handleClearForm(initialFormState);
      }
   };

   return (
      <ViewWrapper as="form" onSubmit={handleSubmitUser}>
         <Title>Neuen Studenten hinzufügen:</Title>
         <FormField label="Name:" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
         <FormField label="Fakultät:" id="fakultaet" name="fakultaet" value={formValues.fakultaet} onChange={handleInputChange} list="fakultaet" />
         <FormField label="Semester:" id="semester" name="semester" value={formValues.semester} onChange={handleInputChange} />
         <FormField
            checked={formValues.consent}
            label="Zustimmung:"
            id="consent"
            name="consent"
            type="checkbox"
            value={formValues.semester}
            onChange={handleToggleConsent}
         />
         <Button type="submit">Add</Button>
         {formValues.error ? <p>{formValues.error}</p> : null}
      </ViewWrapper>
   );
};

export default AddUser;
