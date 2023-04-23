import Home from "./components/home";
import Setting from "./components/setting";
import Contact from "./components/contact";
import UserRegisterName from "./components/userRegisterName";
import UserRegisterNumber from "./components/userRegisterNumber";
import UserRegisterAddress from "./components/userRegisterAddress";
import RegisterSaver from "./components/RegisterSaver";
import UserInfo from "./components/userInfo";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CompleteRegister from "./components/completeRegister";
import FirstSplash from "./components/firstSplash";
import Permission from "./components/permission";
import SetAlarmMessage from "./components/SetAlarmMessage";
import SetEmergencyAlarm from "./components/SetEmergencyAlarm";
import ModifySaver from "./components/modifySaver";

import { useState, useEffect } from "react";
import { useColorScheme, Appearance } from "react-native";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [complete, setComplete] = useState(false);
  const Stack = createStackNavigator();

  const [colorScheme, setColorScheme] = useState(useColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const LoadReg = async () => {
    try {
      const userInfoData = await AsyncStorage.getItem("userInfoData");
      // AsyncStorage에서 'userInfoData' 키로 저장된 값을 가져옵니다.
      let userData = userInfoData ? JSON.parse(userInfoData) : {};
      // 가져온 데이터를 JSON.parse를 통해 객체로 변환합니다. 데이터가 없으면 빈 객체를 생성합니다.
      if (userData) {
        console.log("Data 로딩 성공");
      }
      if (!userData) {
        userInfo.userInfo = userInfo.userInfo || {};
      }
      isCompleteReg = userData.userInfo.completeRegister;
      // userInfo 객체 안에 있는 name 속성에 name 상태 변수 값을 저장합니다.

      if (isCompleteReg) {
        setComplete(true);
      } else if (!isCompleteReg || "") {
        setComplete(false);
      }

      console.log(complete);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  LoadReg();

  if (complete === false) {
    return (
      <ColorSchemeContext.Provider value={colorScheme}>
        <NavigationContainer
          theme={{
            colors:
              colorScheme === "light"
                ? { background: "#ffffff" }
                : { background: "#1f1d24" },
          }}
        >
          <Stack.Navigator initialRouteName="firstSplash">
            <Stack.Screen
              options={{ headerShown: false }}
              name="firstSpalsh"
              component={FirstSplash}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Permission"
              component={Permission}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="userRegisterName"
              component={UserRegisterName}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="userRegisterNumber"
              component={UserRegisterNumber}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="userRegisterAddress"
              component={UserRegisterAddress}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="CompleteRegister"
              component={CompleteRegister}
            />
            <Stack.Screen
              options={{ headerShown: false, gestureEnabled: false }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Contact"
              component={Contact}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Setting"
              component={Setting}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SetAlarmMessage"
              component={SetAlarmMessage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SetEmergencyAlarm"
              component={SetEmergencyAlarm}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="RegisterSaver"
              component={RegisterSaver}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UserInfo"
              component={UserInfo}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="ModifySaver"
              component={ModifySaver}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ColorSchemeContext.Provider>
    );
  }

  if (complete === true) {
    return (
      <ColorSchemeContext.Provider value={colorScheme}>
        <NavigationContainer
          theme={{
            colors:
              colorScheme === "light"
                ? { background: "#ffffff" }
                : { background: "#1f1d24" },
          }}
        >
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{ headerShown: false, gestureEnabled: false }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Contact"
              component={Contact}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Setting"
              component={Setting}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SetAlarmMessage"
              component={SetAlarmMessage}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SetEmergencyAlarm"
              component={SetEmergencyAlarm}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="RegisterSaver"
              component={RegisterSaver}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="UserInfo"
              component={UserInfo}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="ModifySaver"
              component={ModifySaver}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ColorSchemeContext.Provider>
    );
  }
}

export const ColorSchemeContext = createContext(null);
