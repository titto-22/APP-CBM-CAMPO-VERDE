 import { StyleSheet, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';



import Login from './src/pages/Login';
import HomeEmergencias from './src/pages/HomeEmergencias';
import Registrarse from './src/pages/Registrarse';
import dadosEmergencia from './src/pages/dadosEmergencia';
export default function App() {
  
  //Cria navegação
  const Drawer = createDrawerNavigator();
  //const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Login'
        screenOptions={styles.styleTitlePagesColorRedBgWhite}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Ajuda"
              onPress={() => Linking.openURL('https://www.youtube.com')}
              activeTintColor='#fff'
              inactiveTintColor='#e7e7e7'
            />
          </DrawerContentScrollView>
            )}
      > 
        <Drawer.Screen 
          name="Login" 
          component={Login}
          options={{ gestureEnabled: false }}
        />
        <Drawer.Screen 
          name="Emergências" 
          component={HomeEmergencias} 
          options={{headerBackVisible:false}}
        />
        <Drawer.Screen 
           name="Registrar-se" 
           component={Registrarse} 
        />
        <Drawer.Screen 
           name="Dados da Emergência" 
           component={dadosEmergencia} 
        />
      </Drawer.Navigator>
    </NavigationContainer>  

    /*
    //Inicialização padrão para usar nagevação no aplicativo
    //Cria as páginas dentro Stack.Navigator
    //Cada Screen é uma página
    //initialTouteName é a propriedade que define a página inicial
    //Se deixar vazio sem a propriedade, renderiza o primeiro Screen
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={styles.styleTitlePagesColorRedBgWhite} //Estilo para todas as páginas
      >
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={styles.styleTitlePagesColorRedBgWhite} //define estilo para pagina atual
          />
          <Stack.Screen 
            name="HomeEmergências" 
            component={HomeEmergencias} 
            options={{headerBackVisible:false}}//Esconde no botão de voltar
            />
          <Stack.Screen 
            name="Registrar-se" 
            component={Registrarse} 
          />
      </Stack.Navigator>
    </NavigationContainer>
    */
    )
}

export const styles = StyleSheet.create({
  styleTitlePagesColorRedBgWhite:{
    headerStyle: {
      backgroundColor: '#ff0000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    gestureEnabled: false,
    drawerStyle: {
      backgroundColor: '#ff0000',
      width: 240,
    },
    drawerActiveTintColor: '#ffffff',
    drawerInactiveTintColor:'#e7e7e7'    
  },
});
