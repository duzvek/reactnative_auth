import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function Login({ route, navigation }) {

    const [uname, setUname] = useState('')
    const [pword, setPword] = useState('')

    return (
        <View>
            <View>
                <TextInput placeholder='username' onChangeText={setUname}/>
            </View>
            <View>
                <TextInput placeholder='password' onChangeText={setPword}/>
            </View>
            <View>
                <Button title='Login' onPress={() => {
                    for (let i = 0; i < route.params.datas.length; i++) {
                        if (route.params.datas[i]['username'] === uname && route.params.datas[i]['password'] === pword) {
                            navigation.navigate('Dashboard', { uname: uname })
                            return
                        }
                    }
                    console.warn('wrong credentials!')
                }}/>
            </View>
        </View>
    )
}