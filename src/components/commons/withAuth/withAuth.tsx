import React, { ComponentType, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    useEffect(() => {
      async function isLoggedIn() {
        if (await !AsyncStorage.getItem('isLoggedIn')) {
          Alert.alert('로그인 먼저해주세요!');
        }
      }
      isLoggedIn();
    }, []);
    return <Component {...props} />;
  };
