import React from "react";
import { StyleSheet,View,Text,Image,Pressable } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const Footer = () =>{
    return(
        <View style={{flexDirection:'row',backgroundColor:'#1ba9ff',height:'50px',position:'fixed',bottom:0}}>
            <Pressable>
                <IconFontAwesome name='bars'
                    size={40}  style={{paddingRight:140,marginTop:5}}
                ></IconFontAwesome>
            </Pressable>
           
            <Pressable>
                <Icon name='home'style={{paddingRight:130,marginTop:3}}
                    size={40}
                ></Icon>
            </Pressable>
            <Pressable>
                <Icon name='back'style={{paddingRight:140,marginTop:3}}
                    size={45}
                ></Icon>
            </Pressable>
        </View>
    )
}
export default Footer
