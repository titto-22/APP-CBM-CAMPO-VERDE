import { Dimensions } from 'react-native';


/*  ------------------------ // Solução para usar rem \\ ------------------------  */

export const rem=(value)=>{
  let baseFont =16
  const { width, height } = Dimensions.get('window');
  if(height<700){
    baseFont =14
  }
  return baseFont*value
}