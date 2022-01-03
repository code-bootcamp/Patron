import Community from '../../../src/components/units/community/home/community.container';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityWrite from '../../../src/components/units/community/write/communityWrite.container';
import CommunityList from '../../../src/components/units/community/list/communityList.container';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const CommunityScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Community} options={{ headerShown: false }} />
      <Stack.Screen
        name="write"
        component={CommunityWrite}
        options={{
          title: '커뮤니티 글쓰기',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
        }}
      />
      <Stack.Screen
        name="list"
        component={CommunityList}
        options={() => ({
          headerTitle: '',
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: 'white',
          headerRight: () => <Icon name="ellipsis-vertical" color="white" size={20} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default CommunityScreen;
