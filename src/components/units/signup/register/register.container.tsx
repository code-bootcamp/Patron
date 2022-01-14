import React, { useState } from 'react';
import RegisterUI from './register.presenter';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './register.query';
import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputTextInputEventData,
} from 'react-native';

const Register = ({ navigation }) => {
  const [createUser] = useMutation(CREATE_USER);

  const [email, setEmail] = useState<string>('');
  const [emailConfirm, setEmailConfirm] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [tempNumber, setTempNumber] = useState<string>('');
  const [authNumber, setAuthNumber] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');

  const [isAuth, setIsAuth] = useState(false);

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

  const onChangeEmailConfirm = (event: NativeSyntheticEvent<TextInputTextInputEventData>) => {
    setEmailConfirm(event.nativeEvent.text);
  };

  const onChangeTempNumber = (event: NativeSyntheticEvent<TextInputTextInputEventData>) => {
    setAuthNumber(event.nativeEvent.text);
  };

  const onPressAuth = () => {
    if (email === emailConfirm) {
      const temp = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
      setTempNumber(temp);
      Alert.alert('인증번호을 입력해주세요');
    } else {
      Alert.alert('이메일이 동일하지않습니다');
    }
    setIsAuth(true);
  };

  const onPressSubmit = async () => {
    if (!/\w+@\w+\.\w+/.test(email) || email.length <= 2) {
      setEmailError('올바른 이메일을 입력해주세요');
      return;
    }

    if (!password || password.length <= 2) {
      setPasswordError('비밀번호를 두글자 이상 입력해주세요');
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError('비밀번호가 일치하지 않습니다');
      return;
    } else if (password === passwordConfirm) {
      setPasswordConfirmError('');
    }

    if (!name || name.length <= 1) {
      setNameError('이름을 한글자 이상 입력해주세요');
      return;
    }

    if (authNumber !== tempNumber) {
      Alert.alert('인증번호가 다릅니다');
      return;
    }

    if (email && password && name && passwordConfirm && authNumber && tempNumber) {
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
        navigation.navigate('login');
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  };

  return (
    <RegisterUI
      onPressSubmit={onPressSubmit}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onChangePassConfirm={onChangePassConfirm}
      onChangeEmailConfirm={onChangeEmailConfirm}
      onPressAuth={onPressAuth}
      onChangeTempNumber={onChangeTempNumber}
      email={email}
      password={password}
      name={name}
      emailError={emailError}
      passwordError={passwordError}
      passwordConfirm={passwordConfirm}
      nameError={nameError}
      passwordConfirmError={passwordConfirmError}
      isAuth={isAuth}
      tempNumber={tempNumber}
    />
  );
};
export default Register;
