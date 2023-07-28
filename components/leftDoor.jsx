import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-web';

const iconStyle = (isActive) => {
    return isActive ? {color: 'gray', cursor: 'pointer'} : {color: 'black'}
}

export default function LeftDoor({visible}) {
    const [iconHover, setIconHover] = useState({
        selectImg: false,
        upload: false
    });
    return (
        <View style={[door.main, !visible && {display: 'none'}]}>
            {/* ВЕРХНИЕ ИКОНКИ */}
            <View style={door.topButtons}>
                
                {/* ИКОНКА ВЫБОРА ФАЙЛОВ */}
                <View
                    style={iconStyle(iconHover.selectImg)}
                    onMouseEnter={() => setIconHover((iconHover) => ({...iconHover, selectImg: true}))}
                    onMouseLeave={() => setIconHover((iconHover) => ({...iconHover, selectImg: false}))}
                >
                    <Icon style={{width: 36, height: 36}} icon="ph:file-plus-bold" />
                </View>

                {/* ИКОНКА ЗАГРУЗКИ ФАЙЛОВ */}
                <View
                    style={iconStyle(iconHover.upload)}
                    onMouseEnter={() => setIconHover((iconHover) => ({...iconHover, upload: true}))}
                    onMouseLeave={() => setIconHover((iconHover) => ({...iconHover, upload: false}))}
                >
                    <Icon style={{width: 36, height: 36}} icon="solar:upload-bold" />
                </View>
            </View>

            {/* ЗАГРУЖАЕМЫЕ ФАЙЛЫ */}
            <View style={door.bottomState}>
                <Text style={door.bottomState.text}>Файлы не выбраны</Text>
            </View>
        </View>
    );
}

const door = StyleSheet.create({
    main:{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '330px',
        height: '1024px',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        backdropFilter: 'blur(20px)',
        zIndex: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 15,
        paddingRight: 15
    }, 
    topButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: '4px',

    },
    bottomState: {
        marginTop: 10,
        text: {
            fontSize: 18
        }
    }
})