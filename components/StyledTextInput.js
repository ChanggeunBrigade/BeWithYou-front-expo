import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import * as Font from 'expo-font';
import { lightTheme } from '../color';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';

export default function StyledTextInput(props) { 

  const [number, setNumber] = useState("");
  const [focus, setFocus] = useState(false);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if (number.length >= 5) {
      setEnable(true)
    } 
    else {
      setEnable(false);
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
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.section}>
                <Text style={
                    focus ? styles.FocusFont : styles.BlurFont
                }>{props.label}</Text>
                <TextInput 
                    onChangeText={(text) => {
                      setNumber(text)
                    }}
                    value={number}
                    style={focus ? styles.inputOnFocus : styles.inputOnBlur}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                ></TextInput>
            </View>

            <View style={styles.section}>
            </View>
            
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    button: {
      flexDirection: 'column-reverse',
      height: 60,
      backgroundColor: '#3182f7',
      borderRadius: 15,
      marginBottom: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
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
    header: {
      backgroundColor: 'fff',
      paddingHorizontal: 20,
      alignItems: 'center',
      flexDirection: "row",
      marginTop: 45,
      marginBottom: 20
    },
    Profile: {
      backgroundColor: 'fff',
      paddingHorizontal: 20,
      alignItems: 'center',
      flexDirection: "row",
      marginTop: 15,
      marginBottom: 10
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
      color: '#6a7684',
      letterSpacing: -0.2,
      paddingBottom: 2,
      fontSize: 13, 
      marginLeft: 5, 
      marginRight: 10,
      marginTop: 50,
    }
  });