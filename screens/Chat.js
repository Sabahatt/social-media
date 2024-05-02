import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { images } from '../constants';
import {MaterialIcons} from '@expo/vector-icons'

const users = [images.user1, images.user2, images.user3, images.user4]

const Chat = ({ navigation}) => {

  return (

    <View style={styles.container}>

        <TouchableOpacity 
            onPress={()=>navigation.navigate('Inbox')}
        >
            <MaterialIcons
                name="arrow-back"
                size={24}
                color={'grey'}
            />
        </TouchableOpacity>
        

        <View style={styles.chatContainer}>
        
            <Image
            source={images.user1}
            style={{
                height: 50,
                width: 50,
                borderRadius: 80,
                marginBottom: 10
                  }}
            />
            <Text style={{marginBottom: 30}}>John Marston</Text>

            <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.sender}>Heyy</Text>
                <Text style={styles.sender}>U there?</Text>
                <Text style={{alignSelf: 'flex-end', color:'grey'}}>3:06 pm</Text>
            </View>
            <View style={{alignSelf: 'flex-start'}} >
                <Text style={styles.reciever}>Yeah what's up</Text>
                <Text style={{alignSelf: 'flex-start', color: 'grey'}}>3:15 pm</Text>
            </View>
            <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.sender}>Do you know any places where I could get a good deal on a camera</Text>
                <Text style={{alignSelf: 'flex-end', color:'grey'}}>3:30 pm</Text>
            </View>
            <View style={{alignSelf: 'flex-start'}} >
                <Text style={styles.reciever}>Let me ask around and get back to you</Text>
                <Text style={{alignSelf: 'flex-start', color: 'grey'}}>3:32 pm</Text>
            </View>
            

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: "15%"

            }}>
                <MaterialIcons
                    name="photo"
                    size={24}
                    color={'grey'}
                />
                 <TextInput 
                    placeholder='Type a message'
                    style={{
                        borderColor: 'grey',
                        borderWidth: 2,
                        borderRadius: 30,
                        padding: 10,
                        margin: 10,
                        flex: 1
                    }}
                />
                 <MaterialIcons
                    name="send"
                    size={24}
                    color={'grey'}
                />
               
            </View>


        </View>

    </View>
  );
};

export default Chat;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: '#fff',
    },
    chatContainer: {
        alignItems: 'center',
        padding: 10
    },
    sender: {
        backgroundColor: '#EEA849',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        color: '#FFF'
    },
    reciever: {
        backgroundColor: '#E7E7E7',
        marginTop: 20,
        padding: 10,
        borderRadius: 10
    }
 
  });