import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import MyBlur from '../components/MyBlur';

const SignIn = ({navigation}) => {
  return (
    <>
      <MyBlur />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Hello again!!!</Text>
            <Text style={styles.body}>
              Welcome back to the app. Please sign in to continue.
            </Text>
            <TextInput
              style={styles.input}
              placeholder={'Enter username'}
              autoCorrect={false}
              name={'username'}
              autoFocus={true}
            />
            <TextInput
              name={'password'}
              style={styles.input}
              maxLength={12}
              placeholder={'Enter password'}
              autoCorrect={false}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Text
                style={[
                  styles.buttonsText,
                  {fontWeight: 'bold', lineHeight: 30, textAlign: 'right'},
                ]}>
                Recovery Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sigInButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Sign In</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Or continue with</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Welcome')}
                style={styles.buttonRegister}>
                <Image
                  style={{width: 40, height: 40}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Welcome')}
                style={styles.buttonRegister}>
                <Image
                  style={{width: 40, height: 40}}
                  source={{
                    uri: 'https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Welcome')}
                style={styles.buttonRegister}>
                <Image
                  style={{width: 40, height: 40}}
                  source={{
                    uri: 'https://i.pinimg.com/originals/41/28/2b/41282b58cf85ddaf5d28df96ed91de98.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'center',
    color: '#353147',
  },
  body: {
    padding: 20,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: '#353147',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#DFE3E630',
    marginTop: 40,
  },
  buttonsText: {
    fontWeight: '500',
    color: '#353147',
  },
  buttonRegister: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff70',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 10,
  },
  buttonSigIn: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  input: {
    backgroundColor: '#F7F7F7',
    padding: 20,
    borderRadius: 16,
    marginBottom: 10,
  },
  sigInButton: {
    backgroundColor: '#FD6D6A',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#FD6D6A',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 10.32,
  },
});
