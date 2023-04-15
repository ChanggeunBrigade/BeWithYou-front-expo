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
