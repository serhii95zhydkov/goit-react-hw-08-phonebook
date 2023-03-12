const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    placeholder: 'Enter your name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'Enter your email',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'Enter your password',
  },
};

export default fields;
