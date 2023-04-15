import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Appearance } from 'react-native';
import * as Font from 'expo-font';
import { lightTheme } from '../color';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 
import { useEffect, useState } from 'react';

export default function ContactItem(props) {

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

  const themeMainTextStyle = isDark === false ? styles.lightMainText : styles.darkMainText;
  const themeSubTextStyle = isDark === false ? styles.lightSubText : styles.darkSubText;
  const themeSectionBgStyle = isDark === false ? styles.lightSectionBg : styles.darkSectionBg;
  const themeContainerStyle = isDark === false ? styles.lightContainer : styles.darkContainer;
  const themeBtnStyle = isDark === false ? styles.lightBtn : styles.darkBtn;

  return (
    <ScrollView style={[styles.container, themeContainerStyle]}>

        <TouchableOpacity  style={[styles.section, themeBtnStyle]}>
          {isDark ? <Image style={styles.profileImage} source={require('../assets/img/setting/profileDark.png')}></Image> : 
          <Image style={styles.profileImage} source={require('../assets/img/setting/profile.png')}></Image>}
        
            <View style={styles.profileName}>
                <Text style={[{...styles.boldText, marginLeft: 10}, themeMainTextStyle]}>{props.name}</Text>
                <Text style={[{...styles.subText, fontSize: 13, marginLeft: 10, marginTop: 3}, themeSubTextStyle]}>{props.phNum}</Text>
            </View>

            <Text style={[{...styles.Text, fontSize: 14, marginRight: 10}, themeSubTextStyle]}>수정</Text>

            <Fontisto name="angle-right" size={11} color="#6a7684" styles={{marginRight: 100, paddingTop: 100}} />
        </TouchableOpacity>

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
    backgroundColor: '#2f3035'
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