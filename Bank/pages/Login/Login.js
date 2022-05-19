import React, {useEffect, useState} from 'react';
import { View,
        KeyboardAvoidingView,
        Image,
        TextInput,
        TouchableOpacity,
        Text,
        Platform,Button} from 'react-native';
import Style from './Style';

export default class Login extends React.Component{

    render(){
        return(
            <KeyboardAvoidingView style={Style.background} behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
                <View style={Style.containerLogo}>
                <Image 
                    style={Style.logo} 
                    source={require('./../../assets/logo.png')}/>
                </View>
                
                <View>
                    <Text style={Style.welcome}>Bem vindo(a) ao banco Banke!</Text>
                </View>


                <View style={Style.container}>
                
                <TextInput
                style={Style.input}
                placeholder = "CPF"
                autoCorrect={false}
                onChangeText={()=>{}}
                />

                <TextInput
                style={Style.input}
                placeholder = "senha"
                autoCorrect={false}
                onChangeText={()=>{}}
                />

                <TouchableOpacity style={Style.btnSubmit}>
                    <Button
                            style={Style.submitText}
                            onPress={() => this.props.navigation.navigate('Home')}
                            title="Acessar"
                        />
                </TouchableOpacity>

                </View>


            </KeyboardAvoidingView>
        )  
    }
   
   
}