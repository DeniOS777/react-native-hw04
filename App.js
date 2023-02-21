import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
// import { RegistrationScreen } from './src/Screens/RegistrationScreen';
// import { LoginScreen } from './src/Screens/LoginScreen';
// import { PostsScreen } from './src/Screens/PostsScreen';
// import { CreatePostsScreen } from './src/Screens/CreatePostsScreen';
// import { ProfileScreen } from './src/Screens/ProfileScreen';

import { chooseNavigation } from './src/Routes';

const fontsMap = {
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
};

SplashScreen.preventAutoHideAsync();

// const AuthStack = createStackNavigator();
// const HomeTab = createBottomTabNavigator();

// const chooseNavigation = isAuth => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator initialRouteName="RegistrationScreen">
//         <AuthStack.Screen
//           options={{ headerShown: false }}
//           name="Registration"
//           component={RegistrationScreen}
//         />
//         <AuthStack.Screen
//           options={{ headerShown: false }}
//           name="Login"
//           component={LoginScreen}
//         />
//       </AuthStack.Navigator>
//     );
//   }
//   return (
//     <HomeTab.Navigator>
//       <HomeTab.Screen name="Posts" component={PostsScreen} />
//       <HomeTab.Screen name="Create" component={CreatePostsScreen} />
//       <HomeTab.Screen name="Profile" component={ProfileScreen} />
//     </HomeTab.Navigator>
//   );
// };

export default function App() {
  const [fontsLoaded] = useFonts(fontsMap);
  const routes = chooseNavigation({});

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routes}</NavigationContainer>;
}
