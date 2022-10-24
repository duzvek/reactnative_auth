import { View, TextInput, Text } from "react-native";

export default function Dashboard({ route }) {

    return (
        <View>
            <Text>Hello {route.params.uname}!</Text>
        </View>
    )

}