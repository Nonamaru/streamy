import { View, Text, TextInput, Image, Button, StyleSheet, Dimensions } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from "react-native-web";

const {width, height} = Dimensions.get('window');



export default function Auth(){
    const navigation = useNavigation();
    return(
        <View style={authStyles.web}>
            {/* <Button onPress={() => navigation.navigate('Home')} /> */}
            <View style={authStyles.viewContainer}>
                <View style={authStyles.content}>
                    <View style={authStyles.nameAndLogo}>
                        <View style={authStyles.nameAndLogo.logo}>
                            <Image 
                                style={authStyles.nameAndLogo.img} 
                                source={require('../assets/logotype.png')}
                            />
                        </View>
                        <Text style={authStyles.nameAndLogo.name}>Streamy</Text>
                    </View>

                    <View style={authStyles.form}>
                        <Text style={authStyles.form.title}>
                            Вход
                        </Text>
                        <View style={authStyles.form.email}>
                            <Text style={authStyles.form.inputTitle}>Email</Text>
                            <TextInput 
                                placeholderTextColor={'#B5B5B5'}
                                style={authStyles.form.inputs} 
                                placeholder="Enter your email" 
                                underlineColor={'red'}
                            />
                        </View>
                        <View style={authStyles.form.password}>
                            <Text style={authStyles.form.inputTitle}>Password</Text>
                            <TextInput 
                                placeholderTextColor={'#B5B5B5'}
                                style={authStyles.form.inputs} 
                                placeholder="Enter your password"
                                secureTextEntry={true}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                        >
                            <View style={authStyles.form.submit}>
                                <Text style={authStyles.form.submit.text}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}



const authStyles = StyleSheet.create({
    web:{
        width: width,
        userSelect: 'none'
    },
    viewContainer: {
        width: 1440,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    content:{
        width: 1200,
        height: height,
        marginRight: 'auto',
        marginLeft: 'auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameAndLogo:{
        position: 'absolute',
        top: 60,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        img:{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
        },
        logo:{
            marginRight: 6,
            width: 32,
            height: 30,
            // border: '1px solid black',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
        },
        name: {
            fontSize: 20,
            width: '100%',
            height: '100%',
        }
    },
    form:{
        width: 383,
        marginRight: 'auto',
        marginLeft: 'auto',
        title:{
            fontSize: 28,
            textAlign: 'center',
            marginBottom: 30,
        },
        email:{
            marginBottom: 23,
        },
        password:{
            marginBottom: 45,
        },
        inputTitle:{
            fontSize: 12,
            marginBottom: 11,
        },
        inputs:{
            paddingLeft: 16,
            paddingRight: 16,
            height: 41,
            borderRadius: 7,
            backgroundColor: 'rgba(217, 217, 217, 0.50)',
        },
        submit:{
            textAlign: 'center',
            height: 51, 
            borderRadius: 6,
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            text:{
                fontSize: 14,
                color: 'white',
                fontWeight: 'bold',
            }
        }
    },
})