import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, ScrollView, TextInput } from 'react-native';
import * as Font from 'expo-font';
import { lightTheme } from '../color';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 
import { useState } from 'react';
import StyledTextInput from './StyledTextInput';
import Button from './Button';
import PhoneNumberInput from './PhoneNumperInput';

export default function UserInfo({navigation}) {

  const [loaded] = Font.useFonts({
    PretendardExtraBold : require('../assets/fonts/Pretendard-ExtraBold.ttf'),
    PretendardSemiBold : require('../assets/fonts/Pretendard-SemiBold.ttf'),
    PretendardRegular : require('../assets/fonts/Pretendard-Regular.ttf'),
    PretendardMedium : require('../assets/fonts/Pretendard-Medium.ttf'),
    PretendardBold : require('../assets/fonts/Pretendard-Bold.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <StatusBar style="auto" />

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.header}>
          <Ionicons name="arrow-back-outline" size={27} color="#343d4c" />
          <Text style={{...styles.Text, fontSize: 22, color: '#343d4c'}}>사용자 정보 수정</Text>
        </TouchableOpacity>
            
        <View style={styles.section}>
          <StyledTextInput label="이름"></StyledTextInput>
          <StyledTextInput label="주소"></StyledTextInput>
          <PhoneNumberInput label="연락처"></PhoneNumberInput>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    height: 60,
    marginBottom: 20,
    backgroundColor: '#3182f7',
    borderRadius: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'fff',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: "row",
    marginTop: 45,
    marginBottom: 0
  },
  Profile: {
    backgroundColor: 'fff',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10
  },
  section: {
    flex: 1,
    marginTop: 0,
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 15
  },
  Text: {
    fontFamily: 'PretendardMedium',
    fontSize: 23,
    letterSpacing: -0.4,
    marginLeft: 10,
    color: '#6a7684'
  },
  boldText: {
    fontFamily: 'PretendardBold',
    fontSize: 17,
    letterSpacing: -0.4,
    paddingTop: 2,
    marginLeft: 5,
    color: '#343d4c'
  },
  subText: {
    fontFamily: 'PretendardRegular',
    fontSize: 10,
    color: '#6a7684',
    letterSpacing: -0.2,
    paddingBottom: 2,
  }
});