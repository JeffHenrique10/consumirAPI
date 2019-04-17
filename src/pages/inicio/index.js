import React, {Component} from 'react';
import {View,StyleSheet,Text, ScrollView,TouchableOpacity} from 'react-native';
import api from '../../services/api';
import User from '../../components/User';

export default class inicio extends Component{
    state={
        user:[],
    }

    componentDidMount= async()=>{
        const res= await api.get('');
        this.setState({user:res.data.results});
    };

    render(){
        const {user}=this.state;
        return(
            <View style={styles.container}>
                <View style={styles.segundaView}>
                    <Text style={styles.texto}>LISTA DE USUÁRIOS</Text>
                </View>
                
                <ScrollView>
                    {user.map(user =>(
                        <TouchableOpacity key={user.login.uuid} onPress={()=>{
                            this.props.navigation.navigate('detalhes' ,{
                                Nome: user.name.first,
                                Idade: user.dob.age,
                                Sexo: user.gender,
                                Endereco: user.location.street,
                                Cidade: user.location.city,
                                UF: user.location.state,
                                Imagem: user.picture.large,
                            });
                        }}>
                        <User key={user.login.uuid} name={`${user.name.first} ${user.name.last}`}
                            image={user.picture.medium} email={user.email}/>
                        </TouchableOpacity>
                    ))}

                </ScrollView>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor:'#FFF',
    },

    segundaView:{
        alignItems: 'center',
        marginTop: 30,
    },

    texto:{
        fontSize: 16,
        color:'#00000F',
    },
});