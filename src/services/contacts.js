import instance from "./auth";

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const postContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteByIdContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
