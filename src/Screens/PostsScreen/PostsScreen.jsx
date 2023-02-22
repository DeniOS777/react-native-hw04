import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './PostsScreen.styled';

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <View style={styles.wrapImage}>
          <Image
            style={styles.image}
            source={require('../../../assets/dummy_poster.jpg')}
          />
        </View>

        <View>
          <Text style={styles.textName}>Derek Menson</Text>
          <Text style={styles.textEmail}>derek_menson@mail.com</Text>
        </View>
      </View>
    </View>
  );
};
