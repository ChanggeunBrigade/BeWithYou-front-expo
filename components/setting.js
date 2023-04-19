import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Appearance,
} from "react-native";
import * as Font from "expo-font";
import { lightTheme } from "../color";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { useState, useContext } from "react";

import { ColorSchemeContext } from "../App";

export default function Setting({ navigation }) {
  const colorScheme = useContext(ColorSchemeContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [loaded] = Font.useFonts({
    PretendardExtraBold: require("../assets/fonts/Pretendard-ExtraBold.ttf"),
    PretendardSemiBold: require("../assets/fonts/Pretendard-SemiBold.ttf"),
    PretendardRegular: require("../assets/fonts/Pretendard-Regular.ttf"),
    PretendardMedium: require("../assets/fonts/Pretendard-Medium.ttf"),
    PretendardBold: require("../assets/fonts/Pretendard-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        colorScheme === "dark" ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.header}
      >
        <Ionicons
          name="arrow-back-outline"
          size={27}
          style={[
            colorScheme === "dark" ? styles.darkMainText : styles.lightMainText,
          ]}
        />
        <Text
          style={[
            { ...styles.Text, fontSize: 22 },
            colorScheme === "dark" ? styles.darkMainText : styles.lightMainText,
          ]}
        >
          환경설정
        </Text>
      </TouchableOpacity>

      <View style={styles.Profile}>
        {colorScheme === "dark" ? (
          <Image
            style={styles.profileImage}
            source={require("../assets/img/setting/profileDark2.png")}
          ></Image>
        ) : (
          <Image
            style={styles.profileImage}
            source={require("../assets/img/setting/profile2.png")}
          ></Image>
        )}

        <View style={styles.profileName}>
          <Text
            style={[
              styles.boldText,
              colorScheme === "dark"
                ? styles.darkMainText
                : styles.lightMainText,
            ]}
          >
            이창근
          </Text>
          <Text
            style={[
              { ...styles.subText, fontSize: 12, marginLeft: 20, marginTop: 3 },
              colorScheme === "dark" ? styles.darkSubText : styles.lightSubText,
            ]}
          >
            010-1234-8745
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("UserInfo")}
          activeOpacity={0.8}
          style={[
            styles.tinyButton,
            colorScheme === "dark" ? styles.darkBtn : styles.lightBtn,
          ]}
        >
          <Text
            style={[
              styles.subText,
              colorScheme === "dark" ? styles.darkSubText : styles.lightSubText,
            ]}
          >
            내 정보 수정하기
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.greySpace,
          colorScheme === "dark" ? styles.darkSectionBg : styles.lightSectionBg,
        ]}
      ></View>

      <TouchableOpacity
        onPress={() => navigation.navigate("SetEmergencyAlarm")}
        activeOpacity={0.5}
        style={[
          styles.buttonTab,
          colorScheme === "dark" ? styles.darkContainer : styles.lightContainer,
        ]}
      >
        <Text
          style={[
            { ...styles.Text, fontSize: 18, marginLeft: 5, paddingTop: 0 },
            colorScheme === "dark" ? styles.darkMainText : styles.lightMainText,
          ]}
        >
          비상알림 시간 설정
        </Text>
        <Fontisto
          name="angle-right"
          size={12}
          color="#343d4c"
          styles={{ flex: 1 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SetAlarmMessage")}
        activeOpacity={0.5}
        style={[
          styles.buttonTab,
          colorScheme === "dark" ? styles.darkContainer : styles.lightContainer,
        ]}
      >
        <Text
          style={[
            { ...styles.Text, fontSize: 18, marginLeft: 5, paddingTop: 0 },
            colorScheme === "dark" ? styles.darkMainText : styles.lightMainText,
          ]}
        >
          알림메시지 설정
        </Text>
        <Fontisto
          name="angle-right"
          size={12}
          color="#343d4c"
          styles={{ flex: 1 }}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.buttonTab,
          colorScheme === "dark" ? styles.darkContainer : styles.lightContainer,
        ]}
      >
        <Text
          style={[
            { ...styles.Text, fontSize: 18, marginLeft: 5, paddingTop: 0 },
            colorScheme === "dark" ? styles.darkMainText : styles.lightMainText,
          ]}
        >
          방해금지 설정
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#0060ff" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ paddingVertical: 0, marginVertical: -20, marginRight: -5 }}
        />
      </View>

      <View style={styles.section}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
  },

  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#1f1d24",
  },

  greySpace: {
    height: 25,
    paddingHorizontal: 20,
    backgroundColor: lightTheme.sectionBackground,
  },

  lightSectionBg: {
    backgroundColor: "#f4f4f4",
  },
  darkSectionBg: {
    backgroundColor: "#101012",
  },

  buttonTab: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#ffffff",
  },

  header: {
    backgroundColor: "fff",
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 45,
    marginBottom: 20,
  },
  Profile: {
    backgroundColor: "fff",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20,
  },
  profileName: {
    flex: 1,
  },
  tinyButton: {
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginLeft: 20,
    marginTop: 5,
  },
  lightBtn: {
    backgroundColor: "#f1f3f8",
  },
  darkBtn: {
    backgroundColor: "#2c2c34",
  },

  section: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: lightTheme.sectionBackground,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  Text: {
    fontFamily: "PretendardRegular",
    fontSize: 23,
    letterSpacing: -0.4,
    paddingTop: 2,
    marginLeft: 10,
    color: "#343d4c",
  },
  boldText: {
    fontFamily: "PretendardBold",
    fontSize: 17,
    letterSpacing: -0.4,
    paddingTop: 2,
    marginLeft: 20,
    color: "#343d4c",
  },
  subText: {
    fontFamily: "PretendardMedium",
    fontSize: 10,
    color: "#6a7684",
    letterSpacing: -0.2,
    paddingBottom: 2,
  },

  lightMainText: {
    color: "#343d4c",
  },
  darkMainText: {
    color: "#ffffff",
  },
  lightSubText: {
    color: "#343d4c",
  },
  darkSubText: {
    color: "#c3c3c4",
  },

  profileImage: {
    height: 60,
    width: 60,
  },
});
