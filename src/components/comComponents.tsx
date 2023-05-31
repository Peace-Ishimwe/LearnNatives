import React from 'react'
import { View, Text , TextInput , StyleSheet } from 'react-native'

interface HeaderProps {
    mainTitle: String;
    subTitle: String;
}

export const HeaderComponents = (props: HeaderProps) => {
    return (
        <>
            <Text className='text-center text-7xl font-bold text-white'>{props.mainTitle}</Text>
            <Text className='text-text-color text-center text-2xl'>{props.subTitle}</Text>
        </>
    )
}

interface InputLabelComponentProps {
    title: string;
}

export const InputLabelComponent = (props: InputLabelComponentProps) => {
    return (
        <>
            <Text className='text-text-color text-2xl'>{props.title}</Text>
        </>
    )
}

export const InputElement = () => {
    return (
        <>
            <TextInput className='text-2xl' placeholderTextColor={'#A4A4A4 '} placeholder='Username' />
        </>
    )
}