import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Appearance,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import { lightTheme } from "../color";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import StyledTextInput from "./StyledTextInput";
import Button from "./Button";

export default function UserRegisterAddress({ navigation }) {
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

  const [number, setNumber] = useState("");
  const [focus, setFocus] = useState(false);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if (number.length >= 5) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [number]);

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
          <Text
            style={[{ ...styles.boldText, fontSize: 23 }, themeMainTextStyle]}
          >
            거주지 주소를 입력해주세요
          </Text>
          <View>
            <Text
              style={
                focus ? styles.FocusFont : [styles.BlurFont, themeSubTextStyle]
              }
            >
              주소
            </Text>
            <TextInput
              onChangeText={(text) => {
                setNumber(text);
              }}
              value={number}
              style={
                focus
                  ? [styles.inputOnFocus, themeInputTextStyle]
                  : [styles.inputOnBlur, themeInputTextStyle]
              }
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            ></TextInput>
          </View>
        </View>

        {enable ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("CompleteRegister")}
            activeOpacity={0.8}
            style={{ ...styles.button }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "PretendardMedium",
                fontSize: 18,
              }}
            >
              다음
            </Text>
          </TouchableOpacity>
        ) : (
          ""
        )}
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
  FocusFont: {
    fontFamily: "PretendardRegular",
    color: "#0090ff",
    letterSpacing: -0.2,
    paddingBottom: 2,
    fontSize: 13,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 30,
  },
  BlurFont: {
    fontFamily: "PretendardRegular",
    color: "#6a7684",
    letterSpacing: -0.2,
    paddingBottom: 2,
    fontSize: 13,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 30,
  },
  inputOnFocus: {
    fontFamily: "PretendardRegular",
    fontSize: 21,
    borderBottomColor: "#0090ff",
    borderBottomWidth: 2,
    height: 42,
  },
  inputOnBlur: {
    fontFamily: "PretendardRegular",
    fontSize: 21,
    borderBottomColor: "#b6b6c0",
    borderBottomWidth: 1,
    height: 42,
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
    marginBottom: 20,
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
