import React from 'react'
import { View , Text , Image } from 'react-native'

const Login = () => {
return (
    <View className="flex justify-center h-[100vh] items-center bg-gray-900">
      <View className='w-8/12'>
        <Text className='text-center text-7xl font-bold text-white'>Welcome Back!</Text>
        <Text className='text-text-color text-center text-2xl'>welcome back we missed you</Text>
      </View>
      <View className='border border-white w-11/12'>
        <Text className='text-text-color'>Username</Text>
      </View>
    </View>
  )
}

export default Login