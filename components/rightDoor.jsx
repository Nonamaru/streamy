import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';

const getBackgroundStyle = (isActive) => {return isActive ? {backgroundColor: 'darkgray'} : {backgroundColor: '#D9D9D9'}}

export default function RightDoor({visible}) {
    const [hoverElem, sethoverElem] = useState(false);
    return (
        <View style={[door.main, !visible && {display: 'none'}]}>
            
            {/* ВЕРХНИЕ ИКОНКИ */}
            <View style={door.topButtons}>
                {/* ПОЛЬЗОВАТЕЛЬ */}
                <View style={door.user}>
                    <View style={door.user.uIcon}></View>
                    <Text style={door.user.uText}>username</Text>
                </View>

                {/* ВЫХОД */}
                <TouchableOpacity>
                    <View 
                        style={[door.leave, getBackgroundStyle(hoverElem)]}
                        onMouseEnter={() => sethoverElem(true)}
                        onMouseLeave={() => sethoverElem(false)}
                    >
                        <Text style={door.leave.lText}>Выйти</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* РАЗДЕЛ С ПАПКАМИ */}
            <View style={door.folders}>
                <Icon style={{width: 40, height: 40, marginRight: 10}} icon="material-symbols:folder" />
                <Text style={door.folders.name}>foldername</Text>
            </View>

        </View>
    );
}

const door = StyleSheet.create({
    main:{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '330px',
        height: '1024px',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        backdropFilter: 'blur(20px)',
        zIndex: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 15,
        paddingRight: 15,
        borderLeft: 3,
        borderLeftColor: 'black'

    },
    topButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    user: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        uIcon:{
            backgroundColor: 'blue',
            width: 40,
            height: 40,
            borderRadius: 16,
            marginRight: 5
        },
        uText: {fontSize: 14}
    },
    leave:{
        width: 82,
        height: 29,
        borderRadius: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        cursor: 'pointer',
        lText:{
            fontSize: 12,
            fontWeight: 'bold',
        }
    },
    folders:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        name:{
            fontSize: 18
        }
    }
})