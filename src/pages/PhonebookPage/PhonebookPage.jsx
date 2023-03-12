import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getIsLoading } from 'redux/contacts/contacts-selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

import {
  StyledContainer,
  StyledTitle,
  StyledTitleContacts,
} from './PhonebookPage.styled';

const PhonebookPage = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContainer>
      <StyledTitle>PhoneBook</StyledTitle>
      <ContactForm />
      <StyledTitleContacts>Contacts</StyledTitleContacts>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </StyledContainer>
  );
};

export default PhonebookPage;
