import {StyleSheet} from 'react-native';
import Colors from '../../Styles/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 170,
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
  },
  textInput: {
    backgroundColor: 'white',
    marginHorizontal: 40,
    marginVertical: 10,
    paddingStart: 20,
  },
  forgotText: {
    color: 'grey',
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: Colors.green,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
