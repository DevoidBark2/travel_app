import React,{useState} from 'react';
import { Text,View,StyleSheet,Modal,Button,SafeAreaView,TextInput,Alert} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import MapView,{Callout, Marker} from 'react-native-maps';


export default function DescPlace({route}){
    const [modalWindow,setModalWindow] = useState(false)
    const [modalMaps,setModalMaps] = useState(false);

    const textInput = (e) =>{
        const [style,setStyle] = useState({});
        if(e.target.value == ''){
            setStyle({borderWidth:0})
        }
        else{
            setStyle({borderWidth:2})
        }
    }

    const handleModalWindow = (e) => {
        if(e.target.value == ''){
            Alert.alert('Ошибка','Некорректные данные');
        }
        else{
            alert('Бронь зарегистрирована')
            setModalWindow(false)
        }
    }

    const headleSloseModalWindow = () =>{
        Alert.alert('Бронирование','Вы уверены, что хотите отменить бронь?',[
            {text:"Да", onPress:() => setModalWindow(false)},
            {text:"Нет"}
        ])
    }
    return(
        <View style={styles.descPlace}>
            <Modal visible={modalWindow}>
             <SafeAreaView style={styles.modal_window}>
                <Text style={styles.title_modal}>Форма бронирования</Text>
                <Text style={styles.place_modal}>Место: {route.params.name}</Text>
                <Text style={styles.input_text}>Введите Ф.И.О</Text>
                <TextInput style={styles.placeholderStyle} autoCorrect={false} placeholder="Введите Ф.И.О"/>
                <Text  style={styles.input_text}>Введите телефон</Text>
                <TextInput style={styles.placeholderStyle} keyboardType="phone-pad" placeholder='Введите телефон'/>
                <Text style={styles.input_text} >Введите дату</Text>
                <TextInput style={styles.placeholderStyle} blurOnSubmit={true} keyboardType="ascii-capable" placeholder='Введите дату'/>
                <View style={styles.btn_modal_accept}>
                    <Text style={styles.btn_modal_text_accept} onPress={handleModalWindow}>Подтвердить</Text>
                </View>
                <View style={styles.btn_modal}>
                    <Text style={styles.btn_modal_text} onPress={headleSloseModalWindow}>Отменить бронирование</Text>
                </View>
             </SafeAreaView>
            </Modal>
            <Modal visible={modalMaps}>
                        <View style={styles.container}>
                            <MapView style={styles.map}  initialRegion={{
                                    latitude:route.params.coordinates.latitude,
                                    longitude:route.params.coordinates.longitude,
                                    latitudeDelta:0.001,
                                    longitudeDelta:0.001,
                            }}>
                                <Marker coordinate={{latitude: route.params.coordinates.latitude,longitude:route.params.coordinates.longitude}} pinColor="black">
                                    <Callout>
                                        <Text>{route.params.name}</Text>
                                    </Callout>
                                </Marker>
                            </MapView>
                        </View>
                    <Text style={styles.map_close} onPress={() => setModalMaps(false)}>Закрыть</Text>
            </Modal>
            <Text style={styles.title}>{route.params.name}</Text>
            <Text style={styles.desc__places}>{route.params.desc_places}</Text>
            <Text style={styles.view_maps} onPress={() => setModalMaps(true)}>Показать на карте</Text>
            <View style={styles.btn}>
                <Text style={styles.btn_text} onPress={() => setModalWindow(true)}>Забронировать</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modal_window:{
        flex:1,
        backgroundColor:'#284A72'
    },
    title_modal:{
        color:'white',
        textAlign:'center',
        fontFamily:'nt-bold',
        fontSize:24,
        marginBottom:20
    },
    btn_modal:{
        backgroundColor:'#9FC4EF',
        width:320,
        borderRadius:50,
        alignItems:'center',
        position:'absolute',
        top:738,
        left:25
    },
    btn_modal_text:{
        color:'white',
        fontSize:24,
        paddingVertical:11,
        textAlign:'center'
    },
    place_modal:{
        fontFamily:'nt-regular',
        fontSize:20,
        marginBottom:20,
        color:'white',
        textAlign:'center'
    },
    descPlace:{
        backgroundColor:'#284A72',
        flex:1
    },
    btn:{
        backgroundColor:'#9FC4EF',
        width:260,
        borderRadius:50,
        alignItems:'center',
        position:'absolute',
        top:650,
        left:60
    },
    view_maps:{
        fontSize:16,
        color:'white',
        marginTop:30,
        position:'absolute',
        top:590,
        left:119
    },  
    map_close:{
        position:'absolute',
        top:50,
        left:290,
        fontWeight:'700',
        color:'white',
        fontSize:18
    },
    btn_text:{
        color:'white',
        fontSize:24,
        paddingVertical:11,
        paddingHorizontal:44
    },
    title:{
        fontSize:24,
        fontFamily:'nt-bold',
        textAlign:'center',
        color:'white',
        marginTop:10
    },
    placeholderStyle:{
        borderWidth:2,
        height:40,
        fontSize:16,
        width:300,
        marginLeft:37,
        paddingLeft:10,
        borderRadius:50,
        borderColor:'white',
        color:'white'
    },
    input_text:{
        fontSize:16,
        fontFamily:'nt-regular',
        textAlign:'center',
        marginBottom:10,
        marginTop:10,
        color:'white'
    },
      map: {
            width:'100%',
            height:'100%'
        },
      desc__places:{
          fontSize:16,
          color:'white',
          textAlign:'center',
          marginTop:10
      },
      btn_modal_accept:{
        backgroundColor:'#3CEB43',
        width:260,
        borderRadius:50,
        alignItems:'center',
        position:'absolute',
        top:680,
        left:60
      },
      btn_modal_text_accept:{
        color:'white',
        fontSize:24,
        paddingVertical:11,
        paddingHorizontal:44
      }
})


