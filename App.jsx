import * as React from 'react';
import * as SecureStore from 'expo-secure-store'; //Usa para armazenar informação seguras (login) localmente
import { useState } from 'react'; 
import { StyleSheet, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Login from './src/pages/Login';
import HomeEmergencias from './src/pages/HomeEmergencias';
import Registrarse from './src/pages/Registrarse';
import dadosEmergencia from './src/pages/dadosEmergencia';
import Localizacao from './src/pages/localizacao';

const AuthContext = React.createContext();


export default function App({navigation}) {
  const [state,dispatch]=React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  )

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  
  //Controle de Login  
  const [isSignedIn, setIsSignedIn] = useState(true)

  //Cria navegação
  const Drawer = createDrawerNavigator();
  //const Stack = createNativeStackNavigator();

  if (state.isLoading) {
    // Verificando login
    return <SplashScreen />;
  }
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
