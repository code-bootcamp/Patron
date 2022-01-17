import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsMain from '../../../src/components/units/news/newsmain/newsmain.container';

const Stack = createStackNavigator();

const NewsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={NewsMain}
        options={() => ({
          headerTitle: '소식',
        })}
      />
    </Stack.Navigator>
  );
};
export default NewsScreen;
