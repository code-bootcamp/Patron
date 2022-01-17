import EditUI from './edit.presenter';
import React, { useState } from 'react';
import { IPropsEditUI } from './edit.types';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN, RESET_USER_PASSWORD, UPDATE_USER } from './edit.queries';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

const Edit = ({ navigation }: IPropsEditUI) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [updateUser] = useMutation(UPDATE_USER);
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);

  const onChangeName = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setName(event.nativeEvent.text);
  };

  const onChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(event.nativeEvent.text);
  };

  const onClickUpdate = async () => {
    const result = await updateUser({
      variables: {
        updateUserInput: {
          name,
        },
      },
    });
    console.log('name :', result);

    const change = await resetUserPassword({
      variables: {
        password,
      },
    });
    console.log('password :', change);
    navigation.navigate('mypage', { screen: 'personalInformation' });
  };

  return (
    <EditUI
      navigation={navigation}
      data={data}
      name={name}
      onChangeName={onChangeName}
      onClickUpdate={onClickUpdate}
      onChangePassword={onChangePassword}
      password={password}
    />
  );
};

export default Edit;
