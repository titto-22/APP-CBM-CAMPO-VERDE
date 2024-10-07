import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeEmergencias from './src/pages/HomeEmergencias';
import Registrarse from './src/pages/Registrarse';
import Login from './src/pages/Login';
import {rem} from './src/components/function';

export default function App() {
  
  //Cria navegação
  const Stack = createNativeStackNavigator();

  return (
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
    }
  },
});
