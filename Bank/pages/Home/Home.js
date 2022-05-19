import React, {useEffect, useState} from 'react';
import { View,
        Image,
        TextInput,
        Text} from 'react-native';
import { HiEye, HiEyeOff } from "react-icons/hi"
import Style from './Style';

export default class Home extends React.Component {
    render () {

        const [saldo, setSaldo] = useState(false);
        const [show, setShow] = useState(false);
      
          const handleClick = (e) => {
              e.preventDefault()
              setShow(!show);
          }


        return (
            <View style={Style.container}>
                 <View >
                    <Text style={Style.titulo}>Saldo</Text>
                 </View>
                 <View>
                    <Text style={Style.cifrao}>R$</Text>
                 </View>
                 <View style={Style.saldo}>
                    <View style={Style.loginInputSaldo}>
                    <View style={Style.cifrao}>R$</View>
                    <TextInput type={show ? text : password} value={saldo}></TextInput>

                    <View style={Style.login-eye2}>
                        {show ? (
                        <HiEye size={20} onClick={handleClick} />
                        ) : (
                        <HiEyeOff size={20} onClick={handleClick} />
                        )}
                    </View>
                    </View>
                </View>



            </View>
        );
    }
}
