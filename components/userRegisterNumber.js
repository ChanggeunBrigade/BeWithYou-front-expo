import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import * as Font from 'expo-font';
import { lightTheme } from '../color';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';
import StyledTextInput from './StyledTextInput';
import PhoneNumberInput from './PhoneNumperInput';
import Button from './Button';

export default function UserRegisterNumber() {

    const [focus, setFocus] = useState(false);
    const [number, setNumber] = useState("");
    const [enable, setEnable] = useState(false);

    const handlePress = (number) => {
      const regex = /^[0-9\b -]{13}$/;
      if (regex.test(number)) {
        setEnable(true)
      }
      if (!regex.test(number)) {
        setEnable(false);
      }
    }

    useEffect(() => {
      if (number.length === 10) {
        setNumber(number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      }
      if (number.length === 13) {
        setNumber(number.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
      }
    }, [number]);

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
        <View style={styles.header}>
          <Ionicons name="arrow-back-outline" size={27} color="#343d4c" />
        </View>
            
        <View style={styles.section}>
          <Text style={{...styles.boldText, fontSize: 23}}>연락처를 입력해주세요</Text>
        </View>

        <View style={{marginHorizontal: 20}}>
                <Text style={
                    focus ? styles.FocusFont : styles.BlurFont
                }>연락처</Text>
                <TextInput
                    onChangeText={(text) => {
                      handlePress(text);
                      setNumber(text)
                    }}
                    value={number}
                    keyboardType='number-pad'
                    style={focus ? styles.inputOnFocus : styles.inputOnBlur}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                ></TextInput>
            </View>
            <View style={styles.section}>
                {enable ? <TouchableOpacity activeOpacity={0.8} style={{...styles.button}}>
                    <Text style={{color: '#fff', fontFamily: 'PretendardMedium', fontSize: 18}}>다음</Text>
                    </TouchableOpacity> : ''}
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
  FocusFont: {
    fontFamily: 'PretendardRegular',
    color: '#0090ff',
    letterSpacing: -0.2,
    paddingBottom: 2,
    fontSize: 13, 
    marginLeft: 5, 
    marginRight: 10,
    marginTop: 30,
},
BlurFont: {
    fontFamily: 'PretendardRegular',
    color: '#6a7684',
    letterSpacing: -0.2,
    paddingBottom: 2,
    fontSize: 13, 
    marginLeft: 5, 
    marginRight: 10,
    marginTop: 30,
},
inputOnFocus: {
  fontFamily: 'PretendardRegular',
  fontSize: 21,
  borderBottomColor: '#0090ff',
  borderBottomWidth: 2,
  height: 42,
  marginHorizontal: 5
},
inputOnBlur: {
    fontFamily: 'PretendardRegular',
    fontSize: 21,
    borderBottomColor: '#b6b6c0',
    borderBottomWidth: 1,
    height: 42,
    marginHorizontal: 5
},
  button: {
    height: 60,
    marginBottom: 20,
    backgroundColor: '#3182f7',
    borderRadius: 15,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'fff',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: "row",
    marginTop: 45,
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
    marginTop: 15,
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