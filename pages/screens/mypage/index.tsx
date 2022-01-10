import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Edit from '../../../src/components/units/mypage/editprofile/edit.container';
import Notice from '../../../src/components/units/mypage/notice/notice.container';
import PersonalInformation from '../../../src/components/units/mypage/personalinformation/personalInformation.container';
import MypagePost from '../../../src/components/units/mypage/post/post.container';
import Setting from '../../../src/components/units/mypage/setting/setting.container';
import Icon from 'react-native-vector-icons/Ionicons';
import Stamp from '../../../src/components/units/mypage/stamp/stamp.container';

const Stack = createStackNavigator();

const MypageScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="personalInformation"
        component={PersonalInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="editprofile"
        component={Edit}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#000000" size={20} />,
        })}
      />
      <Stack.Screen
        name="notice"
        component={Notice}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#898989" size={20} />,
        })}
      />
      <Stack.Screen
        name="setting"
        component={Setting}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#898989" size={20} />,
        })}
      />
      <Stack.Screen
        name="post"
        component={MypagePost}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#898989" size={20} />,
        })}
      />
      <Stack.Screen
        name="stamp"
        component={Stamp}
        options={() => ({
          headerRight: () => <Icon name="ellipsis-vertical" color="#898989" size={20} />,
        })}
      />
    </Stack.Navigator>
  );
};
export default MypageScreen;
