import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView, FlatList } from 'react-native';
import { images, FONTS } from '../constants';
import {MaterialIcons, Foundation} from '@expo/vector-icons'
import { friends } from '../constants/data';
const users = [images.user1, images.user2, images.user3, images.user4]

const Inbox = ({ navigation }) => {

    function renderSearchBar(){
        return(
            <View style={{
                flexDirection: 'row',
                margin: 10,
                borderRadius: 20,
                borderColor: '#E7E7E7',
                borderWidth: 2,
                borderRadius: 30,
                alignItems: 'center',
                padding: 12

            }}>
                <MaterialIcons
                    name="search"
                    size={24}
                    color={'black'}
                />
                <TextInput 
                    placeholder='Search'
                    style={{
                        marginLeft: 10
                    }}
                />
            </View>
        )
    }

    function renderSuggestionsContainer() {
        return (
            <View>
                <View style={{ marginVertical: 8 }}>
                    {/* <Text style={{ ...FONTS.h3 }}>Timeline</Text> */}
                    <Text style={{ ...FONTS.body3 }}>Online Friends</Text>
                </View>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={friends}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <View
                            key={item.id}
                            style={{
                                flexDirection: 'column',
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => console.log('Pressed')}
                                style={{
                                    paddingVertical: 4,
                                    marginRight: 10,
                                }}
                            >
                                <Image
                                    source={item.image}
                                    resizeMode="contain"
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 80,
                                        borderWidth: 3,
                                        borderColor: 'lightgreen',
                                    }}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{ ...FONTS.body3, fontWeight: 'bold' }}
                            >
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    }

    function renderChats(user, chatName, chatText, newMsg, time){
        return (
            <View style={{padding: 5}}>
                <TouchableOpacity
                    style={styles.chatItem}
                    onPress={() => navigation.navigate('IndiChat', { chatId: 1 })} // Navigate to IndividualChatScreen with chatId
                >
                    <Image
                        source={user}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 80,
                        }}
                    />
                    <View style={styles.chatPrev} >
                        <Text style={styles.chatName}>{chatName}</Text>                    
                        <Text style={styles.lastMessage}>{chatText}</Text>
                    </View>

                    <View style={{marginLeft: 10}}>
                        <Text style={{color: 'grey'}}>{time}</Text>

                        {newMsg &&  (
                        <View style={{
                            alignSelf: 'flex-end',
                            marginTop: 10
                            }}>
                            <Text style={{
                                backgroundColor: '#EEA849',
                                width: 20,
                                height: 20,
                                borderRadius: 5,
                                textAlign: 'center',
                                color: 'white'
                            }}>1</Text>
                        </View>
                        )}
                    </View>

                    

                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>

            {renderSearchBar()}
            {renderSuggestionsContainer()}

            {renderChats(images.user1, 'John Marston', 'Let me ask around and get ....', false, '3:32 pm')}
            {renderChats(images.friend6, 'Nikita Maxwell', 'Do u wanna hang out later  ', true, '11:01 am')}
            {renderChats(images.user3, 'Kelly Smith', 'send me the pictures we took!',false, '1:11 pm')}
            {renderChats(images.user4, 'Jung Kim', 'hey can i get my jacket back',false, '5:30 pm')}
            {renderChats(images.friend4, 'Jake Philip', 'Sending u the documents etc',false, '9:45 pm')}
            {renderChats(images.user2, 'Nikita Maxwell', 'Wanna hang out later today',false, '8:33 am')}
            {renderChats(images.user3, 'Kelly Smith', 'send me the pictures we took!',false, '1:11 pm')}
            {renderChats(images.user4, 'Jung Kim', 'suggest a movie for tonight pls',false, '1:11 pm')}
            

        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  chatItem: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 26,
    //borderWidth: 1,
    borderColor: '#E7E7E7',
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 16,
    color: '#666',
  },
  chatPrev: {
    marginLeft: 10
  }
});

export default Inbox;
