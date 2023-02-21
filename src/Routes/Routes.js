import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RegistrationScreen } from '../Screens/RegistrationScreen';
import { LoginScreen } from '../Screens/LoginScreen';
import { PostsScreen } from '../Screens/PostsScreen';
import { CreatePostsScreen } from '../Screens/CreatePostsScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';

const AuthStack = createStackNavigator();
const HomeTab = createBottomTabNavigator();

export const chooseNavigation = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="RegistrationScreen">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <HomeTab.Navigator initialRouteName="Posts">
      <HomeTab.Screen
        options={{ title: 'Публикации', headerTitleAlign: 'center' }}
        name="Posts"
        component={PostsScreen}
      />
      <HomeTab.Screen
        options={{ title: 'Создать публикацию', headerTitleAlign: 'center' }}
        name="Create"
        component={CreatePostsScreen}
      />
      <HomeTab.Screen
        options={{ title: 'Профиль', headerTitleAlign: 'center' }}
        name="Profile"
        component={ProfileScreen}
      />
    </HomeTab.Navigator>
  );
};
