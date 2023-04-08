import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Appearance } from 'react-native';
import * as Font from 'expo-font';
import { lightTheme, darkTheme } from '../color';
import { useState, useEffect } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

export default function Home({navigation}) {

  const colorScheme = Appearance.getColorScheme();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (colorScheme === 'light') {
      setIsDark(false);
    }
    if (colorScheme === 'dark') {
      setIsDark(true);
    }
  }, []);


  console.log(colorScheme);

  const themeMainTextStyle = isDark === false ? styles.lightMainText : styles.darkMainText;
  const themeSubTextStyle = isDark === false ? styles.lightSubText : styles.darkSubText;
  const themeSectionBgStyle = isDark === false ? styles.lightSectionBg : styles.darkSectionBg;
  const themeContainerStyle = isDark === false ? styles.lightContainer : styles.darkContainer;


  const [loaded] = Font.useFonts({
    Malang : require('../assets/fonts/MalangmalangB.ttf'),
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
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar style="auto" />

      <View style={styles.header}>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={[styles.mainLogoText, themeMainTextStyle]}>함께할게.</Text>
        </TouchableOpacity>

      </View>

      <View style={[styles.section, themeSectionBgStyle]}>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterSaver')} activeOpacity={0.6} style={[styles.mainButton, themeContainerStyle]}>
        <Text style={styles.subText}>구호자</Text>
          <Text style={[styles.Text, themeMainTextStyle]}>연락처 등록</Text>
          <Image style={styles.tinyImage} source={require('../assets/img/home/contact.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Contact')} activeOpacity={0.6} style={[styles.mainButton, themeContainerStyle]}>
          <Text style={styles.subText}>구호자</Text>
          <Text style={[styles.Text, themeMainTextStyle]}>연락처 관리</Text>
          <Image style={{...styles.tinyImage, marginTop: 32}} source={require('../assets/img/home/contact_config.png')}></Image>
        </TouchableOpacity>

      </View>

      <View style={[styles.section, themeSectionBgStyle]}>
        <TouchableOpacity activeOpacity={0.6} style={[styles.mainButton, themeContainerStyle]}>
            <Text style={styles.subText}>최신 버전으로</Text>
            <Text style={[styles.Text, themeMainTextStyle]}>업데이트</Text>
            <Image style={styles.tinyImage} source={require('../assets/img/home/update.png')}></Image>
        </TouchableOpacity>
         
        <TouchableOpacity onPress={() => navigation.navigate('Setting')} activeOpacity={0.6} style={[styles.mainButton, themeContainerStyle]}>
        <Text style={styles.subText}>쉽고 빠른</Text>
          <Text style={[styles.Text, themeMainTextStyle]}>환경설정</Text>
          <Image style={styles.tinyImage} source={require('../assets/img/home/setting.png')}></Image>
        </TouchableOpacity>
      </View>


      <View style={[styles.section2, themeSectionBgStyle]}>
        <TouchableOpacity activeOpacity={0.8} style={styles.mainTestButton}>
            <Text style={{...styles.Text2}}>테스트 문자 발송</Text>
            <Text style={{...styles.subText2}}>대표 구호자 연락처로 테스트 문자를 발송합니다.</Text>
        </TouchableOpacity>
      </View>


      <View style={[styles.footer, themeSectionBgStyle]}>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#1f1d24',
  },


  header: {
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20
  },


  section: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: 'flex-end'
  },
  section2: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: 'flex-end'
  },
  footer: {
    paddingTop: 20,
    flex: 6.5,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: 'flex-end'
  },
  lightSectionBg: {
    backgroundColor: '#f4f4f4'
  },
  darkSectionBg: {
    backgroundColor: '#101012'
  },


  tinyImage: {
    width: 40,
    height: 40,
    marginTop: 30
  },


  mainButton: {
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 22,
    paddingTop: 20,
    fontFamily: 'PretendardSemiBold',
    backgroundColor: lightTheme.bgColor,
    flex: 2
  },  


  mainTestButton: {
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 22,
    paddingTop: 20,
    fontFamily: 'PretendardSemiBold',
    backgroundColor: "#5081F3",
    flex: 2,
    justifyContent: 'center',
  },

  
  Text: {
    fontFamily: 'PretendardSemiBold',
    fontSize: 18,
    letterSpacing: -0.4,
    paddingTop: 2,
  },
  Text2: {
    fontFamily: 'PretendardSemiBold',
    fontSize: 18,
    letterSpacing: -0.4,
    paddingTop: 2,
    color: '#ffffff'
  },
  lightMainText: {
    color: '#343d4c'
  },
  darkMainText: {
    color: '#ffffff'
  },



  subText: {
    fontFamily: 'PretendardMedium',
    fontSize: 13,
    color: lightTheme.subTextColor,
    letterSpacing: -0.4,
    paddingBottom: 2
  },
  subText2: {
    fontFamily: 'PretendardMedium',
    fontSize: 13,
    color: '#ffffff',
    letterSpacing: -0.3,
    paddingBottom: 2,
    marginTop: 5
  },

  mainLogoText: {
    fontFamily:'Malang',
    fontSize: 25,
    letterSpacing: -1 
  },
  lightMainText: {
    color: '#343d4c',
  },
  darkMainText: {
    color: '#ffffff',
  },


  Icon: {
    justifyContent: 'space-between',
    flexDirection: 'column-reverse'
  }
});