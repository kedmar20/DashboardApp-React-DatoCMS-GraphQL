import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "components/atoms/DeleteButton/DeleteButton";
import { Styledsemester, StyledInfo, Wrapper } from "./UsersListItem.styles";

const UsersListItem = ({ userData: { semester, name, fakultaet = "0%" } }) => {
   return (
      <Wrapper>
         <Styledsemester value={semester}>
            <p>Semester:</p>
            <p>{semester}</p>
         </Styledsemester>
         <StyledInfo>
            <p>
               {name}
               <DeleteButton name={name} />
            </p>
            <p>Fakultät: {fakultaet}</p>
         </StyledInfo>
      </Wrapper>
   );
};

UsersListItem.propTypes = {
   userData: PropTypes.shape({
      semester: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      fakultaet: PropTypes.string,
   }),
};

export default UsersListItem;
