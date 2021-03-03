import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontisto';


const viewportWidth = Dimensions.get('window').width;
export default class Login extends PureComponent {

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
                <View style={styles.card}>
                    <Input 
                    label='Username' 
                    placeholder='Type your username...'
                    inputContainerStyle={{color:'#FFFFFF', borderColor: '#FFFFFF'}} 
                    labelStyle={{color: '#FFFFFF'}}
                    inputStyle={styles.input} 
                    leftIcon={<Icon size={18} name='person' color='#FFFFFF'/>} />
                     <Input 
                    label='Password' 
                    labelStyle={{color: '#FFFFFF'}}
                    inputContainerStyle={{color:'#FFFFFF', borderColor: '#FFFFFF'}}
                    placeholder='Type your password...' 
                    inputStyle={styles.input} 
                    leftIcon={<Icon size={18} name='key' color='#FFFFFF'/>} />
                    <Button 
                    title='Login'
                    buttonStyle={styles.submit}
                    iconRight={true}
                    titleStyle={{marginRight: 10}}
                    icon={<Icon color='#FFFFFF' name='share-a' color='#FFFFFF'/>}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#61c9a8',
    },
    header: {
        backgroundColor: '#61c9a8',
        justifyContent: 'center',
        flexDirection: 'row',
        top: -viewportWidth * 0.5,
        width: viewportWidth,
        height: viewportWidth + 80 ,
        elevation: 10,
        borderRadius: 50,
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 30,
        borderRadius: 40,
        backgroundColor: '#61c9a8',
        top: -180,
    }, 
    input: {
        height: 10,
        color: '#FFFFFF'
    },

    submit: {
        width: 150,
        backgroundColor:'#ed7d3a',
        marginTop: 20,
    }

})