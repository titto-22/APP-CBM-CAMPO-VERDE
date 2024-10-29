import * as React from 'react';
import * as SecureStore from 'expo-secure-store'; //Usa para armazenar informação seguras (login) localmente
import { useState } from 'react'; 
import { StyleSheet, Linking, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Login from './src/pages/Login';
import HomeEmergencias from './src/pages/HomeEmergencias';
import Registrarse from './src/pages/Registrarse';
import dadosEmergencia from './src/pages/dadosEmergencia';
import Localizacao from './src/pages/localizacao';
import {  createLoginInSecureStoreTest, getLocalName, getLocalUser, getLocalPassword, getLocalExpirationDate } from './src/components/function'

const AuthContext = React.createContext();

//Cria usuário para teste, tem que excluir depois
createLoginInSecureStoreTest()

export default function App({navigation}) {
  
  //Função que inicia os serviços de validação de usuário
  //recupera o valor e verifica se faz mais de 30dias do último login
  async function InitialService() {

    const getValidation =  await getLocalExpirationDate()
    const validation = new Date(getValidation)
    const dateNow = new Date()
    const differenceMilliseconds=dateNow-validation
    console.log(differenceMilliseconds)
    const differenceInDay= Math.floor(differenceMilliseconds / (1000 * 60 * 60 * 24));
    console.log(differenceInDay)
     
    if(differenceInDay<30){
      setIsSignedIn(true)
    }
    
  }

  //Inicia a validação
  InitialService()

  //Const que controla se esta logado ou não
  const [isSignedIn, setIsSignedIn] = useState(false)
  
  
  
  //Cria navegação
  const Drawer = createDrawerNavigator();
  //const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer>
      <Drawer.Navigator
        //initialRouteName='Login'
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
        {isSignedIn?(
          <>
            <Drawer.Screen 
              name="Emergências" 
              component={HomeEmergencias} 
              options={{headerBackVisible:false}}

            />
            <Drawer.Screen 
              name="Localização" 
              component={Localizacao} 
            />
            <Drawer.Screen 
              name="Dados da Emergência" 
              component={dadosEmergencia} 

            />
          </>
        ) : (
          <>
            <Drawer.Screen 
              name="Login" 
              component={Login}
              options={{ gestureEnabled: false }}
            />
            <Drawer.Screen 
              name="Registrar-se" 
              component={Registrarse} 
            />
          </>
        )
      }
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
