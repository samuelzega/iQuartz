import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Styles/Color';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  scrollView: {
    height: height - 80,
    backgroundColor: Colors.green,
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    backgroundColor: 'grey',
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 15,
  },
  textContainer: {
    width: '70%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  time: {
    fontSize: 10,
  },
});
