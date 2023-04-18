import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Appearance,
} from "react-native";
import * as Font from "expo-font";
import { lightTheme } from "../color";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import StyledTextInput from "./StyledTextInput";
import Button from "./Button";
import PhoneNumberInput from "./PhoneNumperInput";

export default function ModifySaver({ navigation }) {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (colorScheme === "light") {
      setIsDark(false);
    }
    if (colorScheme === "dark") {
      setIsDark(true);
    }
  }, []);

  const themeMainTextStyle =
    isDark === false ? styles.lightMainText : styles.darkMainText;
  const themeSubTextStyle =
    isDark === false ? styles.lightSubText : styles.darkSubText;
  const themeSectionBgStyle =
    isDark === false ? styles.lightSectionBg : styles.darkSectionBg;
  const themeContainerStyle =
    isDark === false ? styles.lightContainer : styles.darkContainer;
  const themeBtnStyle = isDark === false ? styles.lightBtn : styles.darkBtn;
  const themeInputTextStyle =
    isDark === false ? styles.lightTextInput : styles.darkTextInput;

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, themeContainerStyle]}>
        <StatusBar style="auto" />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.header}
        >
          <Ionicons
            name="arrow-back-outline"
            size={27}
            style={themeMainTextStyle}
          />
        </TouchableOpacity>

        <View style={styles.section}>
          <StyledTextInput label="이름"></StyledTextInput>
          <PhoneNumberInput label="연락처"></PhoneNumberInput>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    height: 60,
    marginBottom: 20,
    backgroundColor: "#3182f7",
    borderRadius: 15,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "fff",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 45,
    marginBottom: 0,
  },
  Profile: {
    backgroundColor: "fff",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },
  section: {
    flex: 1,
    marginTop: 0,
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  Text: {
    fontFamily: "PretendardMedium",
    fontSize: 23,
    letterSpacing: -0.4,
    marginLeft: 10,
    color: "#6a7684",
  },
  boldText: {
    fontFamily: "PretendardBold",
    fontSize: 17,
    letterSpacing: -0.4,
    paddingTop: 2,
    marginLeft: 5,
    color: "#343d4c",
  },
  subText: {
    fontFamily: "PretendardRegular",
    fontSize: 10,
    color: "#6a7684",
    letterSpacing: -0.2,
    paddingBottom: 2,
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#1f1d24",
  },
  lightSectionBg: {
    backgroundColor: "#f4f4f4",
  },
  darkSectionBg: {
    backgroundColor: "#101012",
  },
  lightBtn: {
    backgroundColor: "#f1f3f8",
  },
  darkBtn: {
    backgroundColor: "#2c2c34",
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
  lightTextInput: {
    color: "#000000",
  },
  darkTextInput: {
    color: "#ffffff",
  },
});
