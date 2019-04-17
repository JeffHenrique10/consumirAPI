import React,{Component} from 'react';
import {StyleSheet, View, Text, Image, Button } from 'react-native';

export default class detalhes extends Component{
    render(){
        const {navigation, user}= this.props;
        const nome= navigation.getParam('Nome', 'NO-NAME');
        const idade=navigation.getParam('Idade','NO-AGE');
        const sexo= navigation.getParam('Sexo','NO-SEX');
        const endereco= navigation.getParam('Endereco', 'NO-ADDRESS');
        const cidade= navigation.getParam('Cidade', 'NO-CITY');
        const uf= navigation.getParam('UF', 'NO-UF')
        const imagem= navigation.getParam('Imagem', "");

        return(
            <View style={styles.container}>
                <Image style={styles.imagem} source={{uri:imagem}}/>

                <Text style={styles.texto}>Nome:{nome}</Text>
                <Text style={styles.texto}>Idade:{idade}</Text>
                <Text style={styles.texto}>Sexo:{sexo}</Text>
                <Text style={styles.texto}>Endereço:{endereco}</Text>
                <Text style={styles.texto}>Cidade:{cidade}</Text>
                <Text style={styles.texto}>UF:{uf}</Text>

                <Button title='Voltar' 
                onPress={()=>this.props.navigation.navigate('inicio')}/>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    texto:{
        fontSize: 18,
        color:'#00000F',
    },
    imagem:{
        width: 250,
        height: 250,
        borderRadius: 10,
    }
})