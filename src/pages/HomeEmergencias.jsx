import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { rem } from '../components/function';


export default function HomeEmergencias({navigation}){
  return(
    <View style={stylesHome.containerMain}>
      <Text style={stylesHome.textTitle}>
        SELECIONE A EMERGÊNICA
      </Text>
      <View style={stylesHome.containerFlexRow}>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}
          />
          <Text>
            
          </Text>
        </View>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}
          />
          <Text>
            
          </Text>
        </View>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}
          />
          <Text>
            
          </Text>
        </View>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}

          />
          <Text>
            
          </Text>
        </View>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}
          />
          <Text>
            
          </Text>
        </View>
        <View>
          <Image 
            source={require('../assets/iconFacebook.png')}
            style={stylesHome.image}
          />
          <Text>
            
          </Text>
        </View>

      </View>
      <TouchableOpacity onPress={()=>{navigation.push('Registrar-se',{
              TesteDeParametros:1,
              TesteDeParametrosText      :'texto'}
            )}} 
            style={[]}>
        <Text style={[]}>
          Registrar-se
        </Text>
      </TouchableOpacity>
      
    </View>
  )
}

export const stylesHome = StyleSheet.create({
  containerMain:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:rem(1),
    backgroundColor:'#fff'
  },
  textTitle:{
    fontSize: rem(1.75),
    color:'#64748b',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor:'#64748b',
    borderRadius:8,
    paddingHorizontal:10,
    paddingVertical:5,
  },
  containerFlexRow:{
    flexDirection: 'row',
    gap:10,
    flexWrap:'wrap'
  },
  image:{
    width:rem(8),
    height:rem(8),
    objectFit:'contain'
  }
})