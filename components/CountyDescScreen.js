import React from 'react';
import { Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

export default function CountryDescScreen({item,navigation}){
    return(
        <DropShadow key={item.id} style={{
            shadowColor:'black',shadowOffset:{width:20, height:20},shadowOpacity:0.65, shadowRadius:15,elevation:24
        }}>
           <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('DescPlace',item)}>
            <Text style={styles.title}>{item.name}</Text>
            <Image source={{uri: item.img}} style={{width:321,
                height:251,
                marginLeft:27,
                marginTop:20,
                marginBottom:20, 
                shadowColor: 'black',
                shadowOffset: {width: 10, height: 10},
                shadowRadius: 5}
                }/>
            </TouchableOpacity>
        </DropShadow>
    );
}

const styles = StyleSheet.create({
    block:{
        textAlign:'center'
    },
    title:{
        textAlign:'center',
        color:'white',
        fontSize:20
    },
})