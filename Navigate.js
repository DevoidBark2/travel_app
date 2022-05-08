import React from 'react';
import { StyleSheet} from 'react-native';
import MainScreen from './components/MainScreen';
import CountryScreen from './components/CountyScreen';
import DescPlace from './components/DescPlace'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate(){
    return   <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Main"
                        component={MainScreen}
                        options={{title:'Добро пожаловать в Travel App'}
                        }
                        />
                    <Stack.Screen
                        name="Country"
                        component={CountryScreen}
                        options={{title:'Список мест'}}/>
                    <Stack.Screen
                    name="DescPlace"
                    component={DescPlace}
                    options={{title:'Описание места'}}/>
                </Stack.Navigator>
            </NavigationContainer>;
}

const styles = StyleSheet.create({
})
