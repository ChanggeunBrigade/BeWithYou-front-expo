import { ColorSchemeContext } from "../App";
import { useContext } from "react";

const colorScheme = useContext(ColorSchemeContext);

<View
  style={[
    colorScheme === "dark" ? styles.darkContainer : styles.lightContainer,

    colorScheme === "dark" ? styles.darkMainText : styles.lightMainText,

    colorScheme === "dark" ? styles.darkSubText : styles.lightSubText,

    colorScheme === "dark" ? styles.darkTextInput : styles.lightTextInput,
  ]}
></View>;

const styles = StyleSheet.create({
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
  lightMainText: {s
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


표지
목차
개발 배경 및 작품 소개
기술 스택 및 개발 환경 
작동 원리 설명
기능 및 특징 설명
의의 및 기대 효과
간단한 시연 영상