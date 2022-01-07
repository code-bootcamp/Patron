import React, { useState } from 'react';
import RegisterUI from './register.presenter';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './register.query';

const Register = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.nativeEvent.text);
  };

  const onChangePassword = (event) => {
    setPassword(event.nativeEvent.text);
  };

  const onChangeName = (event) => {
    setName(event.nativeEvent.text);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <RegisterUI
      onClickSubmit={onClickSubmit}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      email={email}
      password={password}
      name={name}
    />
  );
};
export default Register;
