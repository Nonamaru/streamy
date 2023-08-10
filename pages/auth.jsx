import { View, Text, TextInput, Image, Button, StyleSheet, Dimensions } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from "react-native-web";
import { useState } from 'react';

const {width, height} = Dimensions.get('window');



export default function Auth(){
    const navigation = useNavigation();

    const [register, setRegister] = useState(false);
    const [errors, setErrors] = useState(false);
    const [regSuccess, setRegSuccess] = useState(false);
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    });

    const getUserLogin = async (email, pass) => {
        try {
            const response = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: `${email}`,
                    password: `${pass}`,
                })
            });
            const json = await response.json();
            // return json.movies;
            console.log(json);
            localStorage.setItem('jwt', `${json.jwt}`);
            localStorage.setItem('username', `${json.user.username}`);
            localStorage.setItem('folder', `main`);
            setErrors(false);
            setLogin(() => ({
                ...login,
                email: '',
                password: '',
            }));
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
            setErrors(true);
            setLogin(() => ({
                ...login,
                email: '',
                password: '',
            }));
        }
    };

    const getRegistration = async (name, email, username, pass) => {
        alert(
            `
                name: ${name}\n
                email: ${email}\n
                username: ${username}\n
                password: ${pass}\n
            `
        );
        setRegSuccess(true);
    };

    return(
        <View style={authStyles.web}>
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


                    {/* КНОПКА РЕГИСТРАЦИЯ */}
                    <TouchableOpacity
                        style={[{position: 'absolute', top: 0, right: 0}, register && {display: 'none'}]}
                        onPress={() => setRegister(true)}
                    >
                        <View style={authStyles.registerButton}>
                            <Text style={authStyles.registerButton.text}>Регистрация</Text>
                        </View>
                    </TouchableOpacity>

                    {/* РЕГИСТРАЦИЯ */}
                    <View style={[authStyles.form, !register && {display: 'none'}]}>
                        <Text style={authStyles.form.title}>
                            Регистрация
                        </Text>
                        <View style={authStyles.form.email}>
                            <Text style={authStyles.form.inputTitle}>Name</Text>
                            <TextInput 
                                style={authStyles.form.inputs} 
                                onChangeText={(imya) => setRegistration((registration) => ({...registration, name: imya}))}
                                value={registration.name}
                            />
                        </View>
                        <View style={authStyles.form.email}>
                            <Text style={authStyles.form.inputTitle}>Email</Text>
                            <TextInput 
                                style={authStyles.form.inputs} 
                                onChangeText={(milo) => setRegistration((registration) => ({...registration, email: milo}))}
                                value={registration.email}
                            />
                        </View>
                        <View style={authStyles.form.email}>
                            <Text style={authStyles.form.inputTitle}>Username</Text>
                            <TextInput 
                                style={authStyles.form.inputs} 
                                onChangeText={(uname) => setRegistration((registration) => ({...registration, username: uname}))}
                                value={registration.username}
                            />
                        </View>
                        <View style={authStyles.form.password}>
                            <Text style={authStyles.form.inputTitle}>Password</Text>
                            <TextInput 
                                style={authStyles.form.inputs} 
                                secureTextEntry={true}
                                onChangeText={(pass) => setRegistration((registration) => ({...registration, password: pass}))}
                                value={registration.password}
                            />
                        </View>

                        <Text
                            style={[!regSuccess && {display: 'none'}]}
                        >
                            Регистрация прошла успешно, теперь вы можете войти в систему!
                        </Text>
                        <TouchableOpacity
                            onPress={() => getRegistration(
                                registration.name,
                                registration.email,
                                registration.username,
                                registration.password,
                            )}
                        >
                            <View style={authStyles.form.submit}>
                                <Text style={authStyles.form.submit.text}>Регистрация</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    {/* КНОПКА ВХОД */}
                    <TouchableOpacity
                        style={[{position: 'absolute', top: 0, right: 0}, !register && {display: 'none'}]}
                        onPress={() => setRegister(false)}
                    >
                        <View style={authStyles.registerButton}>
                            <Text style={authStyles.registerButton.text}>Логин</Text>
                        </View>
                    </TouchableOpacity>

                    {/* ВХОД */}
                    <View style={[authStyles.form, register && {display: 'none'}]}>
                        <Text style={authStyles.form.title}>
                            Вход
                        </Text>
                        <View style={authStyles.form.email}>
                            <Text style={authStyles.form.inputTitle}>Email</Text>
                            <TextInput 
                                // placeholderTextColor={'#B5B5B5'}
                                // placeholder="|" 
                                style={authStyles.form.inputs} 
                                onChangeText={(log) => setLogin((login) => ({...login, email: log}))}
                                value={login.email}
                            />
                        </View>
                        <View style={authStyles.form.password}>
                            <Text style={authStyles.form.inputTitle}>Password</Text>
                            <TextInput 
                                // placeholderTextColor={'#B5B5B5'}
                                // placeholder="|"
                                style={authStyles.form.inputs} 
                                secureTextEntry={true}
                                onChangeText={(pass) => setLogin((login) => ({...login, password: pass}))}
                                value={login.password}
                            />
                        </View>

                        <View style={[authStyles.errorCatch, !errors && {display: 'none'}]}>
                            <Text style={authStyles.errorCatch.text}>Неправильный логин или пароль!</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => getUserLogin(login.email, login.password)}
                            // onPress={() => navigation.navigate('Home')}
                        >
                            <View style={authStyles.form.submit}>
                                <Text style={authStyles.form.submit.text}>Войти</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

//0fa18720a64bdcc3c46aa0d82c7ea5948005ec0adaeea1b84bd250228dfb2ff91f3f187cd9eaa1623b1745632ce68873cbc597d822679127f1d4fefd83df46782dfb7d94ce385677492d469a27dec1a2b057e3faf92fc3c6e42a35273515c1ee0340ff5c99d13050e83f82f82604472cab8de10b610a15328dafe12945e1d2c9

// {
//     "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjkxMTM5NzIyLCJleHAiOjE2OTM3MzE3MjJ9.tYo1DFhivi6WBbLuslgQ6mLfX7T7TF9LBEfxd2Cl1vY",
//     "user": {
//         "id": 2,
//         "username": "churka1234",
//         "email": "churka@mail.ru",
//         "provider": "local",
//         "confirmed": true,
//         "blocked": false,
//         "createdAt": "2023-08-04T09:02:01.987Z",
//         "updatedAt": "2023-08-04T09:02:01.987Z",
//         "role": {
//             "id": 1,
//             "name": "Authenticated",
//             "description": "Default role given to authenticated user.",
//             "type": "authenticated",
//             "createdAt": "2023-07-12T03:51:09.999Z",
//             "updatedAt": "2023-07-12T03:51:09.999Z"
//         }
//     }
// }

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
    registerButton:{
        position: 'absolute',
        top: 60,
        right: 0,
        height: 30,
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        border: '1px solid black',
        borderRadius: 6,
        cursor: 'pointer',
        text:{
            color: 'white',
            fontWeight: 'bold'
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
    errorCatch:{
        marginBottom: 10,
        text:{
            color: 'darkred',
            fontSize: 16,
            textAlign: 'center',
        }
    }
})