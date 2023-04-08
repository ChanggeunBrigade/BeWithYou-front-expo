import Home from './components/home';
import Setting from './components/setting';
import Contact from './components/contact';
import UserRegisterName from './components/userRegisterName';
import StyledTextInput from './components/StyledTextInput';
import UserRegisterNumber from './components/userRegisterNumber';
import UserRegisterAddress from './components/userRegisterAddress';
import RegisterSaver from './components/RegisterSaver';
import PhoneNumberInput from './components/PhoneNumperInput';
import UserInfo from './components/userInfo';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";




export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name="userRegisterName" component={UserRegisterName} />
        <Stack.Screen options={{headerShown: false}} name="userRegisterNumber" component={UserRegisterNumber} />
        <Stack.Screen options={{headerShown: false}} name="userRegisterAddress" component={UserRegisterAddress} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Contact" component={Contact} />
        <Stack.Screen options={{headerShown: false}} name="Setting" component={Setting} />
        <Stack.Screen options={{headerShown: false}} name="RegisterSaver" component={RegisterSaver} />
        <Stack.Screen options={{headerShown: false}} name="UserInfo" component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
