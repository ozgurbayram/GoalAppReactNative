import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={{marginTop:20,backgroundColor:"#EB5757",paddingLeft:15,paddingRight:15,height:50,width:"100%",alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
           <Text style={{
               fontSize:24,fontWeight:'500',color:'#fff'}}>Ozgur's Goals</Text>
                <Pressable
                    onPress={()=>navigation.navigate('Settings')}
                >
                    <Ionicons name="settings-outline" size={28} color="#fff"/>
                </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
