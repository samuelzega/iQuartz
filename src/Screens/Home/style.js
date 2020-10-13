import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Styles/Color';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 60,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  section2: {
    marginTop: 300,
    backgroundColor: Colors.green,
    height: height - 360,
  },
  card: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profile: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 100,
    marginRight: 10,
  },
});
