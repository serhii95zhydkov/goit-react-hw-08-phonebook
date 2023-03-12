import { useSelector } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import ContactItem from 'components/ContactItem/ContactItem';

import { StyledContactList, StyledContactText } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div>
      {isContacts && (
        <StyledContactList>
          {filteredContacts.map(contact => {
            return (
              <ContactItem key={contact.id} contact={contact}></ContactItem>
            );
          })}
        </StyledContactList>
      )}
      {!isContacts && (
        <StyledContactText>There are no contacts!</StyledContactText>
      )}
    </div>
  );
};

export default ContactList;
