import React from 'react';
import {View,Text,Image, StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

export default function MainScreen({elem}){
    return(
        <DropShadow style={{
            shadowColor:'black',shadowOffset:{width:20, height:20},shadowOpacity:0.65, shadowRadius:15,elevation:24
        }}>
            <View style={styles.disflex}>
                    <Text style={styles.title}>{elem.name}</Text>
                    <Image source={{uri: elem.img}} style={styles.image}/>
            </View>
        </DropShadow>
    );
}

const styles = StyleSheet.create({
    title:{
        marginLeft:20,
        color:'white',
        fontFamily:'nt-regular',
        fontSize:20,
        marginLeft:23,
        textAlign:'center'
    },
    disflex:{
        width:'100%',
        marginTop:20,
        flexDirection:'column',
    },
    image:{
        width:250,
        height:200,
        marginBottom:20,
        marginLeft:64,
        marginTop:20,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 5,
    }
})
