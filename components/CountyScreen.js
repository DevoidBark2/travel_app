import React from 'react';
import {View,Text,Image, StyleSheet,ScrollView} from 'react-native';
import line from '../images/line.png'
import CountryDescScreen from './CountyDescScreen';

export default function CountryScreen({route,navigation}){
    return(
            <ScrollView style={styles.countyscreen} horizontal={false}>
                <View style={styles.container}>
                    <Text style={styles.title}>{route.params.name}</Text>
                    <Text style={styles.desc}>{route.params.desc}</Text>
                    <Image style={styles.line} source={line}/>
                </View>
                {
                    route.params.places.map((item) => {
                        return(
                                <CountryDescScreen key={item.id} navigation={navigation} item={item}/>
                        );
                    })
                }
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    countyscreen:{
        backgroundColor:'#284A72',
        width:'100%'
    },
    title:{
        textAlign:'center',
        color:'white',
        fontWeight:'800',
        fontSize:25,
        marginBottom:20,
        marginTop:10,
        fontFamily:'nt-bold'
    },
    desc:{
        textAlign:'center',
        color:'white',
        fontWeight:'300',
        fontFamily:'nt-regular'
    },
    line:{
        marginTop:20,
        marginBottom:30
    },
    container:{
        width:321,
        marginLeft:26
    }
})

