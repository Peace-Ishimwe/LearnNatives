import React from 'react'
import { View , Text , Image  , StyleSheet , ImageBackground} from 'react-native'

const Login = () => {
return (
    <ImageBackground className="flex justify-center h-[100vh] items-center" source={require('../../assets/Login_Screen.png')}>
      <View className='w-9/12'>
        <Text className='text-center text-7xl font-bold text-white'>Welcome Back!</Text>
        <Text className='text-text-color text-center text-2xl'>welcome back we missed you</Text>
      </View>
      <View className='w-8/12 mt-10'>
        <Text className='text-text-color text-2xl'>Username</Text>
      </View>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
});