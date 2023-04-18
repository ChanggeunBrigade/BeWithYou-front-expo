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
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

export default function SetEmergencyAlarm({ navigation }) {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(false);
  const [number, setNumber] = useState("");
  const [enable, setEnable] = useState(false);
  const [focus, setFocus] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "3시간", value: "banana2" },
    { label: "4시간", value: "banana3" },
    { label: "5시간", value: "banana5" },
    { label: "6시간", value: "banana6" },
    { label: "7시간", value: "banana7" },
    { label: "8시간", value: "banana8" },
    { label: "9시간", value: "banana9" },
    { label: "10시간", value: "banana10" },
    { label: "11시간", value: "banana11" },
    { label: "12시간", value: "banana12" },
  ]);

  useEffect(() => {
    if (colorScheme === "light") {
      setIsDark(false);
    }
    if (colorScheme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (number.length >= 3) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [number]);

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
            style={[themeMainTextStyle]}
          />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text
            style={[
              {
                ...styles.boldText,
                fontSize: 23,
                marginTop: 20,
                marginBottom: 0,
              },
              themeMainTextStyle,
            ]}
          >
            설정할 비상알람 시간 길이를
          </Text>
          <Text
            style={[
              {
                ...styles.boldText,
                fontSize: 23,
                marginTop: 5,
                marginBottom: 20,
              },
              themeMainTextStyle,
            ]}
          >
            선택해주세요
          </Text>
          <Text
            style={
              focus ? styles.FocusFont : [styles.BlurFont, themeSubTextStyle]
            }
          >
            시간
          </Text>

          <DropDownPicker
            listMode="MODAL"
            theme={isDark ? "DARK" : "LIGHT"}
            placeholder="시간 설정..."
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={themeBtnStyle}
            textStyle={{
              fontFamily: "PretendardMedium",
              fontSize: 17,
              color: isDark ? "#ffffff" : "#343d4c",
            }}
            dropDownContainerStyle={{
              backgroundColor: isDark ? "#2c2c34" : "#f1f3f8",
              borderColor: isDark ? "#2c2c34" : "#f1f3f8",
            }}
            modalAnimationType="slide"
            modalContentContainerStyle={{
              backgroundColor: isDark ? "#2c2c34" : "#f1f3f8",
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
            설정 완료
          </Text>
        </TouchableOpacity>
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
    paddingVertical: 10,
  },
  inputOnBlur: {
    fontFamily: "PretendardRegular",
    fontSize: 21,
    borderBottomColor: "#b6b6c0",
    borderBottomWidth: 1,
    paddingVertical: 10,
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
    borderColor: "#f1f3f8",
    marginTop: 10,
    backgroundColor: "#f1f3f8",
  },
  darkBtn: {
    borderColor: "#2c2c34",
    marginTop: 10,
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
