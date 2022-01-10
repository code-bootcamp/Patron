import React, { useState } from 'react';
import RegisterUI from './register.presenter';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './register.query';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputTextInputEventData,
} from 'react-native';

const Register = ({ navigation }) => {
  const [createUser] = useMutation(CREATE_USER);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [name, setName] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');

  const onChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(event.nativeEvent.text);
    if (event.nativeEvent.text !== '') {
      setEmailError('');
    }
  };

  const onChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(event.nativeEvent.text);
    if (event.nativeEvent.text !== '') {
      setPasswordError('');
    }
  };

  const onChangeName = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setName(event.nativeEvent.text);
    if (event.nativeEvent.text !== '') {
      setNameError('');
    }
  };

  const onChangePassConfirm = (event: NativeSyntheticEvent<TextInputTextInputEventData>) => {
    setPasswordConfirm(event.nativeEvent.text);
  };

  const onPressSubmit = async () => {
    if (!email || !email.includes('@') || email.length <= 2) {
      setEmailError('올바른 이메일을 입력해주세요');
    }

    if (!password || password.length <= 2) {
      setPasswordError('비밀번호를 두글자 이상 입력해주세요');
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError('비밀번호가 일치하지 않습니다');
    } else if (password === passwordConfirm) {
      setPasswordConfirmError('');
    }

    if (!name || name.length <= 1) {
      setNameError('이름을 한글자 이상 입력해주세요');
    }

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
      navigation.navigate('confirmation');
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <RegisterUI
      onPressSubmit={onPressSubmit}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onChangePassConfirm={onChangePassConfirm}
      email={email}
      password={password}
      name={name}
      emailError={emailError}
      passwordError={passwordError}
      passwordConfirm={passwordConfirm}
      nameError={nameError}
      passwordConfirmError={passwordConfirmError}
    />
  );
};
export default Register;
