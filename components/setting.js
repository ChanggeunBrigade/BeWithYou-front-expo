import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import { lightTheme } from '../color';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

export default function Setting() {

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
  Text: {
    fontFamily: 'PretendardSemiBold',
    fontSize: 18,
    letterSpacing: -0.4,
    paddingTop: 2,
    color: '#343d4c'
  }
});