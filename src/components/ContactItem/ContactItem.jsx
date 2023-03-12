import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

import { StyledItemContacts, StyledTextContacts } from './ContactItem.styled';

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <StyledItemContacts>
      <StyledTextContacts>
        {name}: {number}
      </StyledTextContacts>
      <Button
        onClick={() => dispatch(deleteContact(id))}
        variant="contained"
        size="small"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </StyledItemContacts>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
