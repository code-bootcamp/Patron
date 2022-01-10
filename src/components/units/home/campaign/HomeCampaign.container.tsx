import * as React from 'react';
import HomeCampaignUI from './HomeCampaign.presenter';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: { screen: string };
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeCampaign({ navigation }: Props) {
  const [isPicked, setIsPicked] = React.useState(false);

  const onPressPick = (el) => async () => {
    setIsPicked((prev) => !prev);
    console.log(el);
    // const bookmarks = JSON.parse((await AsyncStorage.getItem('picked')) || '[]') || [];

    // let isExists = false;
    // bookmarks.forEach((bookmarksEl) => {
    //   if (el._id === bookmarksEl._id) {
    //     isExists = true;
    //   }
    // });

    // if (isExists) {
    //   return;
    // }

    // const { __typename, contents, remarks, name, ...newEl } = el;
    // bookmarks.push(newEl);

    // await AsyncStorage.setItem('picked', JSON.stringify(name));

    // type RootStackParamList = {
    //   home: undefined;
    //   community: { screen: string };
    //   news: undefined;
    //   mypage: undefined;
    // };

    // type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'community'>;

    // type Props = {
    //   navigation: ProfileScreenNavigationProp;
    // };
  };

  const onPressGetId = (el) => () => {
    console.log(el._id);
  };

  return (
    <HomeCampaignUI
      isPicked={isPicked}
      setIsPicked={setIsPicked}
      onPressPick={onPressPick}
      navigation={navigation}
      onPressGetId={onPressGetId}
    />
  );
}
