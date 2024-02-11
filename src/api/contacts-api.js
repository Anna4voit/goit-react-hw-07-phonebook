import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65c6967ae5b94dfca2e1ad6d.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await instance.post('/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
