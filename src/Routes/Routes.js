import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RegistrationScreen } from '../Screens/RegistrationScreen';
import { LoginScreen } from '../Screens/LoginScreen';
import { PostsScreen } from '../Screens/PostsScreen';
import { CreatePostsScreen } from '../Screens/CreatePostsScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
    <HomeTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
      }}
    >
      <HomeTab.Screen
        options={{
          title: 'Публикации',
          headerTitleAlign: 'center',
          headerStyle: { borderBottomWidth: 1 },
          headerTitleStyle: { fontFamily: 'Roboto-Medium' },
          tabBarIconStyle: { marginLeft: 50 },
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
      <HomeTab.Screen
        options={{
          title: 'Создать публикацию',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Roboto-Medium' },
          headerStyle: { borderBottomWidth: 1 },
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
      <HomeTab.Screen
        options={{
          title: 'Профиль',
          headerTitleAlign: 'center',
          tabBarIconStyle: { marginRight: 50 },
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
    </HomeTab.Navigator>
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
