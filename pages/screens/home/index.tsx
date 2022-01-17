import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '../../../src/components/units/home/main/HomeMain.container';
import HomeCampaignList from '../../../src/components/units/home/list/campaign/HomeCampaignList.container';
import HomeDetails from '../../../src/components/units/home/details/HomeDetails.container';
import HomeChildrenList from '../../../src/components/units/home/list/children/HomeChildrenList.container';
import HomePatronList from '../../../src/components/units/home/list/patron/HomePatronList.container';
import HomePayment from '../../../src/components/units/home/homePayment/HomePayment.container';
import Payment from '../../../src/components/units/home/Payment/index';
import PaymentResult from '../../../src/components/units/home/complete/index';
import HomeSearch from '../../../src/components/units/home/search/HomeSearch.container';
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeMain}
        options={() => ({
          headerTitle: '',
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: 'transparent',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
        })}
      />
      <Stack.Screen
        name="homeSearch"
        component={HomeSearch}
        options={() => ({
          headerTitle: '',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: true,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="homelist"
        component={HomeCampaignList}
        options={() => ({
          headerTitle: '캠페인',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="childrenList"
        component={HomeChildrenList}
        options={() => ({
          headerTitle: '결연 아동',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="patronList"
        component={HomePatronList}
        options={() => ({
          headerTitle: '정기 후원',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="homeDetails"
        component={HomeDetails}
        options={() => ({
          headerTitle: '',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: true,
          headerTintColor: 'white',
        })}
      />
      <Stack.Screen
        name="homePayment"
        component={HomePayment}
        options={() => ({
          headerTitle: '결제하기',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={() => ({
          headerTitle: '결제하기',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="PaymentResult"
        component={PaymentResult}
        options={() => ({
          headerTitle: '결제하기',
          headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          headerShadowVisible: true,
          headerTransparent: false,
          headerTintColor: 'black',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
