import { View, StyleSheet, TextInput, Text, Image,TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import { images } from '../constants'
import { AuthStore } from '../Store/auth'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SIZES, FONTS, COLORS } from '../constants'

const Create = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = async () => {
        AuthStore.post();
        setTitle('');
        setContent('');
      };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                >
                    <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color={'grey'}
                    />
                </TouchableOpacity>
                <View style={styles.userImageContainer}>
                    <Image
                        source={images.user2}
                        style={styles.userImage}
                    />
                </View>
            </View>
                <View style={styles.createPostContainer} >
                <TextInput 
                    placeholder='Add a title (optional)'
                    multiline={true} 
                    textAlignVertical="top" 
                    style={styles.createPostTitle}
                    value={title}
                    onChangeText={setTitle}
                    selectionColor={'grey'}
                />
                <TextInput 
                    placeholder='What is on your mind?'
                    multiline={true} 
                    textAlignVertical="top" 
                    style={styles.createPost}
                    value={content}
                    onChangeText={setContent}
                />
                </View>
           
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingVertical: 5}}>
                    <MaterialIcons
                        name="attachment"
                        size={24}
                        color={'grey'}
                    />
                    <MaterialIcons
                        name="photo"
                        size={24}
                        color={'grey'}
                        style={{}}
                    />
                </View>
                <View style={{
                     //flex: 1,
                     alignItems: 'center',
                     justifyContent: 'center',
                }}>
                    <LinearGradient
                        colors={['#F68464', '#EEA849']}
                        style={{
                            height: 40,
                            width: 300,
                            borderRadius: SIZES.padding * 3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            
                        }}
                    >
                            <TouchableOpacity 
                                onPress={()=>onSubmit()}
                                style={{}}
                            >
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        color: COLORS.white,
                                    }}
                                >Publish</Text>

                        </TouchableOpacity>

                    </LinearGradient>
                </View>
        </View>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: '#fff',
    },
    createPostTitle:{
        fontSize: 20,
        marginBottom: 10,
    },
    createPost: {
        
    },
    createPostContainer:{
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        height: '50%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    userImageContainer: {
        flex: 1,
        alignItems: 'center',
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    

 
  });