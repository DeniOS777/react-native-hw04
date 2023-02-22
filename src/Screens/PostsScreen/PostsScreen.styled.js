import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#ffffff',
  },
  containerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  wrapImage: {
    marginRight: 8,
    overflow: 'hidden',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  textName: {
    marginBottom: 4,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 15,
    color: '#212121',
  },
  textEmail: {
    fontSize: 13,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});
