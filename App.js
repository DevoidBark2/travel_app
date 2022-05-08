import React from 'react';
import { View,StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import Navigate from './Navigate';
import * as Font from 'expo-font'

const fonts = () => Font.loadAsync({
  'nt-bold': require('./fonts/NotoSerif-Bold.ttf'),
  'nt-regular': require('./fonts/NotoSerif-Regular.ttf')
})

export default function App() {

  const [font,setFonts] = React.useState(false)
  if(font){
    return(
      <Navigate/>
    )
  }
  else{
    return(
      <AppLoading startAsync={fonts} onFinish={() => setFonts(true)} onError={console.warn}/>
    );
  }
 
}


const styles = StyleSheet.create({
  blockscroll:{
    
  }
})

