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
import { Ionicons } from "@expo/vector-icons";
import StyledTextInput from "./StyledTextInput";
import PhoneNumberInput from "./PhoneNumperInput";
import { ColorSchemeContext } from "../App";
import { useContext, useState, useEffect } from "react";

export default function UserInfo({ navigation }) {
  const [numberFocus, setNumberFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [enable, setEnable] = useState(false);

  const colorScheme = useContext(ColorSchemeContext);

  const handlePress = (number) => {
    const regex = /^[0-9\b -]{13}$/;
    if (regex.test(number) && name.length >= 3 && address.length >= 5) {
      setEnable(true);
    }
    if (!regex.test(number)) {
      setEnable(false);
    }
  };

  useEffect(() => {
    if (number.length === 10) {
      setNumber(number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (number.length === 13) {
      setNumber(
        number.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
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
      <View
        style={[
          styles.container,
          colorScheme === "dark" ? styles.darkContainer : styles.lightContainer,
        ]}
      >
        <StatusBar style="auto" />

        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.header}
        >
          <Ionicons
            name="arrow-back-outline"
            size={27}
            style={
              colorScheme === "dark"
                ? styles.darkMainText
                : styles.lightMainText
            }
          />
          <Text
            style={[
              { ...styles.Text, fontSize: 22, color: "#343d4c" },
              colorScheme === "dark"
                ? styles.darkMainText
                : styles.lightMainText,
            ]}
          >
            사용자 정보 수정
          </Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text
            style={
              nameFocus
                ? styles.FocusFont
                : [
                    styles.BlurFont,
                    colorScheme === "dark"
                      ? styles.darkSubText
                      : styles.lightSubText,
                  ]
            }
          >
            이름
          </Text>
          <TextInput
            onChangeText={(text) => {
              setName(text);
            }}
            value={name}
            style={
              nameFocus
                ? [
                    styles.inputOnFocus,
                    colorScheme === "dark"
                      ? styles.darkTextInput
                      : styles.lightTextInput,
                  ]
                : [
                    styles.inputOnBlur,
                    colorScheme === "dark"
                      ? styles.darkTextInput
                      : styles.lightTextInput,
                  ]
            }
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
          ></TextInput>
          <Text
            style={
              numberFocus
                ? styles.FocusFont
                : [
                    styles.BlurFont,
                    colorScheme === "dark"
                      ? styles.darkSubText
                      : styles.lightSubText,
                  ]
            }
          >
            연락처
          </Text>
          <TextInput
            onChangeText={(text) => {
              handlePress(text);
              setNumber(text);
            }}
            value={number}
            keyboardType="number-pad"
            style={
              numberFocus
                ? [
                    styles.inputOnFocus,
                    colorScheme === "dark"
                      ? styles.darkTextInput
                      : styles.lightTextInput,
                  ]
                : [
                    styles.inputOnBlur,
                    colorScheme === "dark"
                      ? styles.darkTextInput
                      : styles.lightTextInput,
                  ]
            }
            onFocus={() => setNumberFocus(true)}
            onBlur={() => setNumberFocus(false)}
          ></TextInput>
          <Text
            style={
              addressFocus
                ? styles.FocusFont
                : [
                    styles.BlurFont,
                    colorScheme === "dark"
                      ? styles.darkSubText
                      : styles.lightSubText,
                  ]
            }
          >
            주소
          </Text>
          <TextInput
            onChangeText={(address) => {
              setAddress(address);
            }}
            value={address}
            style={
              addressFocus
                ? [
                    styles.inputOnFocus,
                    colorScheme === "dark"
                      ? styles.darkTextInput
                      : styles.lightTextInput,
                  ]
                : [
                    styles.inputOnBlur,
                    colorScheme === "dark"
                      ? styles.darkTextInput
                      : styles.lightTextInput,
                  ]
            }
            onFocus={() => setAddressFocus(true)}
            onBlur={() => setAddressFocus(false)}
          ></TextInput>
        </View>
        <View>
          {enable ? (
            <TouchableOpacity activeOpacity={0.8} style={{ ...styles.button }}>
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "PretendardMedium",
                  fontSize: 18,
                }}
              >
                등록
              </Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
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
    marginHorizontal: 5,
  },
  inputOnBlur: {
    fontFamily: "PretendardRegular",
    fontSize: 21,
    borderBottomColor: "#b6b6c0",
    borderBottomWidth: 1,
    height: 42,
    marginHorizontal: 5,
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
