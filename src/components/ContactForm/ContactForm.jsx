import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts, addContact } from 'redux/contacts/contacts-operations';

import {
  StyledContactForm,
  StyledContainer,
  StyledLabelForm,
  StyledInputForm,
} from './ContactForm.styled';

import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledLabelForm>
          Name
          <StyledInputForm
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabelForm>
        <StyledLabelForm>
          Number
          <StyledInputForm
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabelForm>
      </StyledContainer>
      <Button
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
        size="small"
      >
        Add contact
      </Button>
    </StyledContactForm>
  );
};

export default ContactForm;
