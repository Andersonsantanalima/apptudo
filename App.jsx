import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Cadastrar from './componets/cadastrar';
import Consultar from './componets/consutar';



Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('iViRHL3CzKeIsxpNjBsN3K8VoYLtAmniZYQ590Y8','7xDsT1Fpv2YipYceX58PLQrkTmyZZ9BM3NkJOEk2');
Parse.serverURL = 'https://parseapi.back4app.com/';

const tab = createBottomTabNavigator();


export default function App() {
  return (
     <NavigationContainer>
       <tab.Navigator>
         <tab.Screen name ='cadastrar' component={Cadastrar}  options={{tabBarIcon:({color,size})=>(<Ionicons name="add" size={size} color={color} />)}}/>
         <tab.Screen name ='consultar' component={Consultar} options={{tabBarIcon:({color,size})=>(<Ionicons name="list-sharp" size={size} color={color} />)}}/>
       </tab.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
