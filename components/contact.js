import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, BackHandler, Appearance } from 'react-native';
import * as Font from 'expo-font';
import { lightTheme } from '../color';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';
import ContactItem from './contactItem';

export default function Contact({navigation}) {

  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    if (colorScheme === 'light') {
      setIsDark(false);
    }
    if (colorScheme === 'dark') {
      setIsDark(true);
    }
  }, []);
  
  const themeMainTextStyle = isDark === false ? styles.lightMainText : styles.darkMainText;
  const themeSubTextStyle = isDark === false ? styles.lightSubText : styles.darkSubText;
  const themeSectionBgStyle = isDark === false ? styles.lightSectionBg : styles.darkSectionBg;
  const themeContainerStyle = isDark === false ? styles.lightContainer : styles.darkContainer;
  const themeBtnStyle = isDark === false ? styles.lightBtn : styles.darkBtn;

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
    <ScrollView style={[styles.container, themeContainerStyle]}>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.header}>
          <Ionicons name="arrow-back-outline" size={27} style={themeMainTextStyle} />
        </TouchableOpacity>

        <View style={styles.Profile}>        
          <View>
            <Text style={[{...styles.boldText, fontSize: 23}, themeMainTextStyle]}>구호자 연락처 관리</Text>
            <Text style={[{
                ...styles.subText,
                fontSize: 13, 
                marginLeft: 5, 
                marginRight: 10,
                marginTop: 10,
                lineHeight: 20
                }, themeSubTextStyle]}>여기서 비상구호자들의 연락처를 관리할 수 있어요.
            </Text>
            <Text style={[{
                ...styles.subText,
                fontSize: 13, 
                marginLeft: 5, 
                marginRight: 10,
                lineHeight: 20
                }, themeSubTextStyle]}>연락처를 잘 확인하여 응급메시지가 잘 송신될 수 있도록 해주세요.
            </Text>
          </View>
        </View>

        <ContactItem name="이창근" phNum="010-4201-2745"></ContactItem>
        <ContactItem name="오승민" phNum="010-2042-3215"></ContactItem>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  greySpace: {
    height: 25,
    paddingHorizontal: 20,
    backgroundColor: lightTheme.sectionBackground,
  },
  buttonTab: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: 'fff',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
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
  profileName: {
    flex: 1
  },
  tinyButton: {
    backgroundColor: '#f1f3f8',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginLeft: 20,
    marginTop: 5
  },
  section: {
    marginTop: 15,
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 10,
    paddingRight: 22,
    marginHorizontal: 25,
    borderRadius: 15,
    backgroundColor: '#f1f3f8',
    flexDirection: "row"
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
    fontFamily: 'PretendardMedium',
    fontSize: 10,
    color: '#6a7684',
    letterSpacing: -0.2,
    paddingBottom: 2,
  },
  profileImage: {
    height: 60,
    width: 60
  },

  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#1f1d24',
  },
  lightSectionBg: {
    backgroundColor: '#f4f4f4'
  },
  darkSectionBg: {
    backgroundColor: '#101012'
  },
  lightBtn: {
    backgroundColor: '#f1f3f8'
  },
  darkBtn: {
    backgroundColor: '#2c2c34'
  },
  lightMainText: {
    color: '#343d4c'
  },
  darkMainText: {
    color: '#ffffff'
  },
  lightSubText: {
    color: '#343d4c',
  },
  darkSubText: {
    color: '#c3c3c4',
  },
});