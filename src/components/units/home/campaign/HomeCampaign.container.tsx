import * as React from 'react';
import HomeCampaignUI from './HomeCampaign.presenter';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeCampaign() {
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
  };
  return <HomeCampaignUI isPicked={isPicked} setIsPicked={setIsPicked} onPressPick={onPressPick} />;
}
