import React, { useState } from 'react';
import RegisterUI from './register.presenter';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from './register.query';
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { IPropsNavigation } from './register.types';
import { Mutation, MutationCreateUserArgs } from '../../../../commons/types/generated/types';

const Register = ({ navigation }: IPropsNavigation) => {
  const [createUser] = useMutation<Pick<Mutation, 'createUser'>, MutationCreateUserArgs>(
    CREATE_USER,
  );

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

  const onChangePassConfirm = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPasswordConfirm(event.nativeEvent.text);
  };

  const onChangeEmailConfirm = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmailConfirm(event.nativeEvent.text);
  };

  const onChangeTempNumber = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setAuthNumber(event.nativeEvent.text);
  };

  const onPressAuth = () => {
    if (email === emailConfirm) {
      const temp = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
      setTempNumber(temp);
      Alert.alert('??????????????? ??????????????????');
    } else {
      Alert.alert('???????????? ????????????????????????');
    }
    setIsAuth(true);
  };

  const onPressSubmit = async () => {
    if (!/\w+@\w+\.\w+/.test(email) || email.length <= 2) {
      setEmailError('????????? ???????????? ??????????????????');
      return;
    }

    if (!password || password.length <= 2) {
      setPasswordError('??????????????? ????????? ?????? ??????????????????');
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError('??????????????? ???????????? ????????????');
      return;
    } else if (password === passwordConfirm) {
      setPasswordConfirmError('');
    }

    if (!name || name.length <= 1) {
      setNameError('????????? ????????? ?????? ??????????????????');
      return;
    }

    if (authNumber !== tempNumber) {
      Alert.alert('??????????????? ????????????');
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
