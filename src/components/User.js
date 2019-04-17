import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const User=props=>(
    <View style={styles.container}>
        <Image style={styles.imagem} source={{uri:props.image}}/>
        <View style={styles.segundaView}>
            <Text style={styles.nome}>{props.name}</Text>
            <Text style={styles.email}>{props.email}</Text>
        </View>

        <Icon style={styles.icone} name="chevron-right"/>
    </View>
)

export default User;

const styles=StyleSheet.create({
    container:{
       flex:1,
       flexDirection:'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       backgroundColor:'#D3D3D3',
       margin: 20,
       padding:20,
    },
    imagem:{
        width: 60,
        height: 60,
    },

    segundaView:{
        marginLeft: 15,
    },

    nome:{
        fontSize:18,
        color:'#00000F',
    },

    email:{
        fontSize:14,
        color:'#00000F'
    },

    icone: {
        fontSize: 14,
    },
    
});