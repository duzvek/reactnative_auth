import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Sample from './Dashboard';


export default function Register({ route }) {

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
                <Button title='Register' onPress={() => {
                    route.params.setDatas(() => {
                        for (let i = 0; i < route.params.datas.length; i++) {
                            if (route.params.datas[i]['username'] === uname) {
                                console.warn('existing username')
                                return [...route.params.datas]
                            } 
                        }
                        console.warn('wow!, you\'ve just created an account')
                        return [...route.params.datas, {username: uname, password: pword}]
                    })
                }}/>
            </View>
        </View>
    )
}