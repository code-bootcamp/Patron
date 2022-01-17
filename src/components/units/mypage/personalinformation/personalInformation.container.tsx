import PersonalInformationUI from './personalInformation.presenter';
import React from 'react';
import { IPropsPersonalinformation } from './personalinformation.types';
import { FETCH_USER_LOGGED_IN, LOG_OUT_USER } from './personalinformation.queries';
import { useQuery, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersonalInformation = ({ navigation }: IPropsPersonalinformation) => {
  const [logoutUser] = useMutation(LOG_OUT_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onPressLogout = async () => {
    try {
      await AsyncStorage.removeItem('refreshToken');
      const result = await logoutUser;
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <PersonalInformationUI navigation={navigation} data={data} onPressLogout={onPressLogout} />
  );
};

export default PersonalInformation;
