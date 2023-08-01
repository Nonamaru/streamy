import { View, Button } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Auth(){
    const navigation = useNavigation();
    return(
        <>
        <View>
            SUKA
        </View>
        <Button onPress={() => navigation.navigate('Home')} />
        </>
    )
}