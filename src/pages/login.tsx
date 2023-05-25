import React from 'react'
import { View , Text , Image  , StyleSheet , ImageBackground} from 'react-native'
import { HeaderComponents , InputLabelComponent } from '../components/comComponents'

const Login = () => {
return (
    <ImageBackground className="flex justify-center h-[100vh] items-center" source={require('../../assets/Login_Screen.png')}>
      <View className='w-9/12'>
        <HeaderComponents mainTitle={"Welcome Back!"} subTitle={"welcome back we missed you"} />
      </View>
      <View className='w-8/12 mt-10'>
        <InputLabelComponent title={"Username"} />
      </View>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
});