import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    height: 60,
  },
  logo: {
    width: 130,
    height: 40,
    position: 'absolute',
    marginStart: '25%',
    bottom: 10,
  },
  rightMenu: {
    width: 60,
    height: 30,
    position: 'absolute',
    zIndex: 10,
    right: 10,
    bottom: 10,
  },
});
