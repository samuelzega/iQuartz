import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import style from './style';

export default function Login({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Image style={style.logo} source={require('../../Assets/logo.png')} />
        <Text style={styles.title}>VENDOR</Text>
        <TextInput
          style={styles.textInput}
          value={userName}
          onChangeText={setUserName}
          placeholder="UserName"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <TouchableOpacity>
          <Text style={style.forgotText}>Forgotten your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabNavigation')}
          style={styles.button}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
