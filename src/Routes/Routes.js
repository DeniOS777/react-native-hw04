import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RegistrationScreen } from '../Screens/RegistrationScreen';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { LoginScreen } from '../Screens/LoginScreen';
import { PostsScreen } from '../Screens/PostsScreen';
import { CreatePostsScreen } from '../Screens/CreatePostsScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { CommentsScreen } from '../Screens/CommentsScreen';
import { MapScreen } from '../Screens/MapScreen';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = ({ navigation }) => (
  <Tab.Navigator
    initialRouteName="Posts"
    screenOptions={{ tabBarShowLabel: false }}
  >
    <Tab.Screen
      options={{
        title: 'Публикации',
        headerTitleAlign: 'center',
        headerStyle: { borderBottomWidth: 1 },
        headerTitleStyle: { fontFamily: 'Roboto-Medium' },
        tabBarIconStyle: { marginLeft: 45 },
        tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
        headerRight: () => (
          <TouchableOpacity activeOpacity={0.6} style={{ paddingRight: 16 }}>
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ focused, size, color }) =>
          focused ? (
            <View style={styles.wrapTabButton}>
              <Ionicons name="ios-grid-outline" size={size} color="#ffffff" />
            </View>
          ) : (
            <Ionicons name="ios-grid-outline" size={size} color={color} />
          ),
      }}
      name="Posts"
      component={PostsScreen}
    />
    <Tab.Screen
      options={{
        title: 'Создать публикацию',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontFamily: 'Roboto-Medium' },
        headerStyle: { borderBottomWidth: 1 },
        tabBarStyle: {
          height: 83,
          paddingBottom: 10,
          borderTopColor: 'transparent',
        },
        tabBarIcon: ({ focused, size, color }) =>
          focused ? (
            <View style={styles.wrapTabButton}>
              <Ionicons name="ios-add" size={size} color="#ffffff" />
            </View>
          ) : (
            <Ionicons name="ios-add" size={size} color={color} />
          ),
      }}
      name="Create"
      component={CreatePostsScreen}
    />
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIconStyle: { marginRight: 45 },
        tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
        tabBarIcon: ({ focused, size, color }) =>
          focused ? (
            <View style={styles.wrapTabButton}>
              <Feather name="user" size={size} color="#ffffff" />
            </View>
          ) : (
            <Feather name="user" size={size} color={color} />
          ),
      }}
      name="Profile"
      component={ProfileScreen}
    />
  </Tab.Navigator>
);

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
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeTab} />
      <HomeStack.Screen name="Comments" component={CommentsScreen} />
      <HomeStack.Screen name="Map" component={MapScreen} />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapTabButton: {
    backgroundColor: '#FF6C00',
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 30,
  },
});
