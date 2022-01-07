import Community from '../../../src/components/units/community/home/community.container';
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityWrite from '../../../src/components/units/community/write/communityWrite.container';
import CommunityList from '../../../src/components/units/community/list/communityList.container';
import Icon from 'react-native-vector-icons/Ionicons';
import CommunityDetail from '../../../src/components/units/community/detail/communityDetail.container';

const Stack = createStackNavigator();

const CommunityScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Community}
        options={() => ({
          headerTitle: '커뮤니티',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Icon name="search" color="black" size={20} style={{ padding: 15 }} />
            </View>
          ),
        })}
      />
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
          headerRight: () => (
            <Icon name="ellipsis-vertical" color="white" size={20} style={{ padding: 20 }} />
          ),
        })}
      />
      <Stack.Screen
        name="detail"
        component={CommunityDetail}
        options={() => ({
          headerTitle: '',
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: 'white',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Icon name="share-outline" color="white" size={20} style={{ padding: 15 }} />
              <Icon name="ellipsis-horizontal" color="white" size={20} style={{ padding: 15 }} />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default CommunityScreen;
