import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import { lightTheme } from '../color';
import { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

export default function Home() {

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
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{...styles.mainLogoText}}>함께할게.</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.section}>
        <TouchableOpacity activeOpacity={0.6} style={styles.mainButton}>
        <Text style={styles.subText}>구호자</Text>
          <Text style={styles.Text}>연락처 등록</Text>
          <Image style={styles.tinyImage} source={require('../assets/img/home/contact.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.mainButton}>
          <Text style={styles.subText}>구호자</Text>
          <Text style={styles.Text}>연락처 관리</Text>
          <Image style={{...styles.tinyImage, marginTop: 32}} source={require('../assets/img/home/contact_config.png')}></Image>
        </TouchableOpacity>

      </View>

      <View style={styles.section}>
        <TouchableOpacity activeOpacity={0.6} style={styles.mainButton}>
            <Text style={styles.subText}>최신 버전으로</Text>
            <Text style={styles.Text}>업데이트</Text>
            <Image style={styles.tinyImage} source={require('../assets/img/home/update.png')}></Image>
        </TouchableOpacity>
         
        <TouchableOpacity activeOpacity={0.6} style={styles.mainButton}>
        <Text style={styles.subText}>쉽고 빠른</Text>
          <Text style={styles.Text}>환경설정</Text>
          <Image style={styles.tinyImage} source={require('../assets/img/home/setting.png')}></Image>
        </TouchableOpacity>
      </View>


      <View style={styles.section2}>
        <TouchableOpacity activeOpacity={0.8} style={styles.mainTestButton}>
            <Text style={{...styles.Text2}}>테스트 문자 발송</Text>
            <Text style={{...styles.subText2}}>대표 구호자 연락처로 테스트 문자를 발송합니다.</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.footer}>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: lightTheme.sectionBackground,
    flexDirection: "row",
    justifyContent: 'flex-end'
  },
  section2: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: lightTheme.sectionBackground,
    flexDirection: "row",
    justifyContent: 'flex-end'
  },
  footer: {
    paddingTop: 20,
    flex: 6.5,
    paddingHorizontal: 20,
    backgroundColor: lightTheme.sectionBackground,
    flexDirection: "row",
    justifyContent: 'flex-end'
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
    backgroundColor: "#ffffff",
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
    color: '#343d4c'
  },
  Text2: {
    fontFamily: 'PretendardSemiBold',
    fontSize: 18,
    letterSpacing: -0.4,
    paddingTop: 2,
    color: '#ffffff'
  },
  subText: {
    fontFamily: 'PretendardMedium',
    fontSize: 13,
    color: lightTheme.subTextColor,
    letterSpacing: -0.7,
    paddingBottom: 2
  },
  subText2: {
    fontFamily: 'PretendardMedium',
    fontSize: 13,
    color: '#ffffff',
    letterSpacing: -0.7,
    paddingBottom: 2,
    marginTop: 5
  },
  mainLogoText: {
    fontFamily:'Malang',
    color: "#343d4c",
    fontSize: 25,
    letterSpacing: -1 
  },
  Icon: {
    justifyContent: 'space-between',
    flexDirection: 'column-reverse'
  }
});