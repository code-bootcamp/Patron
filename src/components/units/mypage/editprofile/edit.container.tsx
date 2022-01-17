import EditUI from './edit.presenter';
import React, { useState, useCallback } from 'react';
import { IPropsEditUI } from './edit.types';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN, RESET_USER_PASSWORD, UPDATE_USER } from './edit.queries';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  Mutation,
  MutationResetUserPasswordArgs,
  MutationUpdateUserArgs,
} from '../../../../commons/types/generated/types';

const Edit = ({ navigation, uri, onPress }: IPropsEditUI) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [updateUser] = useMutation<Pick<Mutation, 'updateUser'>, MutationUpdateUserArgs>(
    UPDATE_USER,
  );
  const [resetUserPassword] = useMutation<
    Pick<Mutation, 'resetUserPassword'>,
    MutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  const onImageLibraryPress = useCallback(() => {
    const result = launchImageLibrary({
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    });
    console.log(result);
  }, []);

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
      uri={uri}
      onPress={onPress}
      navigation={navigation}
      data={data}
      name={name}
      onChangeName={onChangeName}
      onClickUpdate={onClickUpdate}
      onChangePassword={onChangePassword}
      password={password}
      onImageLibraryPress={onImageLibraryPress}
    />
  );
};

export default Edit;
