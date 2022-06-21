import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import MyBlur from '../components/MyBlur';

const Welcome = ({navigation}) => {
  const height = Dimensions.get('window').height;
  return (
    <>
      <MyBlur />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require('../images/welcome-image.jpeg')}
            style={{
              width: '85%',
              height: (height / 3) * 1.4,
              borderRadius: 16,
              marginBottom: 40,
            }}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.buttonsText}> Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                style={styles.buttonSigIn}>
                <Text style={styles.buttonsText}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    paddingTop: 20,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    textAlign: 'center',
    color: '#353147',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    borderColor: '#fffff',
    borderRadius: 16,
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
    padding: 16,
    borderRadius: 6,
  },
  buttonSigIn: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
