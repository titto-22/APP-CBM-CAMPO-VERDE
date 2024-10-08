import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Icon(urlImg,text){
  return(
    <View>
      <Image source={{ uri: urlImg }}/>
      <Text>{text}</Text>
    </View>
  )
}