import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function RightDoor({visible}) {
    return (
        <View style={[door.main, !visible && {display: 'none'}]}>
            <Text>RightDoor</Text>
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
        zIndex: 10
    }
})