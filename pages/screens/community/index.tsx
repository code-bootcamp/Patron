import Community from '../../../src/components/units/community/home/community.container';
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityWrite from '../../../src/components/units/community/write/communityWrite.container';
import CommunityList from '../../../src/components/units/community/list/communityList.container';
import Icon from 'react-native-vector-icons/Ionicons';
import CommunityDetail from '../../../src/components/units/community/detail/communityDetail.container';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { gql, useMutation } from '@apollo/client';
import { Mutation, MutationDeleteBoardArgs } from '../../../src/commons/types/generated/types';

const Stack = createStackNavigator();

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CommunityScreen = ({ navigation, route }) => {
  const [deleteBoard] = useMutation<Pick<Mutation, 'deleteBoard'>, MutationDeleteBoardArgs>(
    DELETE_BOARD,
  );

  const onSelectDelete = async () => {
    await deleteBoard({ variables: { boardId: route.params.params.boardId } });
    navigation.navigate('home');
  };
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
            <Icon name="ellipsis-vertical" color="white" size={20} style={{ padding: 15 }} />
          ),
        })}
      />
      <Stack.Screen
        name="detail"
        component={CommunityDetail}
        initialParams={{ boardId: undefined }}
        options={() => ({
          headerTitle: '',
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: 'white',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Icon name="share-outline" color="white" size={20} style={{ padding: 15 }} />
              <Menu>
                <MenuTrigger>
                  <Icon
                    name="ellipsis-horizontal"
                    color="white"
                    size={20}
                    style={{ padding: 15 }}
                  />
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={{ width: 100 }}>
                  <MenuOption
                    onSelect={() => {
                      navigation.navigate('write', {
                        isEdit: true,
                        boardId: route.params.params.boardId,
                      });
                    }}
                    text="수정"
                    style={{ padding: 10 }}
                  />
                  <MenuOption onSelect={onSelectDelete} text="삭제" style={{ padding: 10 }} />
                </MenuOptions>
              </Menu>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default CommunityScreen;
