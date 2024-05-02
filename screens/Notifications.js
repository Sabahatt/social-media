import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { images } from '../constants';


const Notifications = () => {

    function renderNotifs(user, text, newNotif, time){
        return (
            <View style={styles.notificationContainer}>
                    <Image
                        source={user}
                        style={styles.userImage}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{text}</Text>
                        <Text style={styles.time}>{time}</Text>
                    </View>
                    {newNotif && (
                    <View style={styles.newNotifContainer}>
                        <MaterialIcons
                            name="circle"
                            size={20}
                            color={'#EEA849'}
                        />
                    </View>
                )}
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            {renderNotifs(images.user1, 'John Marston Liked your post', true, '4 mins ago')}
            {renderNotifs(images.user3, 'Sarah Johnson Followed you', true, '45 mins ago')}
            {renderNotifs(images.user4, 'Jung Kim Followed you', false, '3 hrs ago')}
            {renderNotifs(images.friend1, 'Emilia K Commented on your photo', false, '3 hrs ago')}
            {renderNotifs(images.friend6, 'Abigail Smith Liked your post', false, '4 hrs ago')}
            {renderNotifs(images.friend4, 'Alexander James Shared your post', false, '4 mins ago')}
            {renderNotifs(images.user1, 'John Marston Liked your post', false, '55 mins ago')}
            {renderNotifs(images.user3, 'Sarah Johnson Followed you', false, '45 mins ago')}
            {renderNotifs(images.user4, 'Jung Kim Followed you', false, '3 hrs ago')}
            {renderNotifs(images.friend1, 'Emilia K Commented on your photo', false, '3 hrs ago')}
            {renderNotifs(images.friend6, 'Abigail Smith Liked your post', false, '4 hrs ago')}
            {renderNotifs(images.friend4, 'Alexander James Shared your post', false, '4 mins ago')}
            
        </ScrollView>
    )
}

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 10,
        
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 80,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        alignSelf: 'flex-end'
    },
    text: {
        fontSize: 16,
    },
    time: {
        color: 'grey',
    },
    newNotifContainer: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
});
