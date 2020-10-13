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
  tab: {
    width: '100%',
    backgroundColor: Colors.orange,
    paddingVertical: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  section1: {
    width: '30%',
    color: 'white',
    textAlign: 'center',
  },
  section2: {
    width: '25%',
    color: 'white',
    textAlign: 'center',
  },
  section3: {
    width: '20%',
    color: 'black',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});
