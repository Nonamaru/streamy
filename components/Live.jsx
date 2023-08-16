import { Dimensions, TextInput, Image, StyleSheet, Text, View } from 'react-native';

const host = 'http://localhost:1337'

export default function Live(){
    return(
        <View style={liveStyle.liveCard}>
            <Text style={liveStyle.liveCard.text}>&#9679; LiVE</Text>
        </View>
    )
}

const liveStyle = StyleSheet.create({
    liveCard: {
        // border: '6px solid darkred',
        borderBottomWidth: 6,
        backgroundColor: 'black',
        borderColor: 'darkred',
        width: 575,
        height: 250,
        marginBottom: 50,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        text: {
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: 18,
            marginLeft: 10,
            marginTop: 10,
        }
    }
})