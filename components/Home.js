import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
    const [datas, setDatas] = useState([])

    return (
        <View>
            <View>
                <Button title='Register' onPress={() => {
                    console.warn(datas)
                    navigation.navigate('Register', {datas: datas, setDatas: setDatas})
                    // navigation.navigate('Register', {datas})
                }}/>
            </View>
            <View>
                <Button title='Login' onPress={() => {
                    navigation.navigate('Login', {datas: datas})
                }}/>
            </View>
        </View>
    )
}