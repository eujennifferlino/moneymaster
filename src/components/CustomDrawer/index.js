import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props){
  const { user } = useContext(AuthContext);
  
  return(
    <DrawerContentScrollView { ...props } >
      <View style={{ alignItems:'center', justifyContent:'center', marginTop:25 }} >
        <Image 
          source={ require('../../assets/logo-money.png') } 
          style={{ width:120, height:120 }}
          resizeMode='contain'
        />

        <Text style={{ color:'#121212', fontSize:18, marginTop:6}} >
          Bem-vindo(a),
        </Text>
        <Text 
        style={{ color:'#121212', fontSize:17, fontWeight:'bold', marginBottom:15, paddingHorizontal:20 }}
        numberOfLines={1} >
          { user && user.name }
        </Text>

      </View>

      <DrawerItemList { ...props } />
    </DrawerContentScrollView>
  )
}