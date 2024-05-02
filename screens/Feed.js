import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput,
    Pressable,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import {
    MaterialIcons,
    Ionicons,
    Feather,
    MaterialCommunityIcons,
} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { AuthStore } from '../Store/auth'

const users1 = [images.user1, images.user3, images.user4]
const users2 = [images.friend1, images.friend2, images.friend3]
const users3 = [images.user5, images.user6, images.user7]

const Feed = () => {

    const [comment, setComment] = useState('')
    const [numOfComments, setNumOfComments] = useState({});

    const [numOfLikes, setNumOfLikes] = useState({})

    const [isLiked, setIsLiked] = useState({});

  

    function renderSearchBar(){
        return(
            <View style={{
                flexDirection: 'row',
                borderRadius: 30,
                borderColor: '#E7E7E7',
                borderWidth: 2,
                alignItems: 'center',
                padding: 10

            }}>
                <MaterialIcons
                    name="search"
                    size={24}
                    color={COLORS.black}
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

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                    
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginRight: 4,
                        }}
                    >
                        My Networks
                    </Text>
                    <MaterialIcons
                        name="keyboard-arrow-down"
                        size={24}
                        color={COLORS.black}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#fff',
                            shadowColor: '#18274B',
                            shadowOffset: {
                                width: 0,
                                height: 4.5,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 6.5,
                            elevation: 2,
                            borderRadius: 22,
                        }}
                    >
                        <Ionicons
                            name="filter"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <LinearGradient
                        colors={['#F68464', '#EEA849']}
                        style={{
                            height: 30,
                            width: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: '#18274B',
                            shadowOffset: {
                                width: 0,
                                height: 4.5,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 6.5,
                            elevation: 2,
                            borderRadius: 22,
                            marginLeft: 12,
                        }}
                    >
                        <Feather name="plus" size={24} color={COLORS.white} />
                    </LinearGradient>
                </View>
            </View>
        )
    }

    function renderFeedPost(postId, img, name, tag, postTitle, postContent, locAndTime, likes, comments, users, postImg) {
        const initialComments = comments || 0; 
        const postComments = numOfComments[postId] || initialComments; 

        const initialLikes = likes || 0
        const postLikes = numOfLikes[postId] || initialLikes

        

        const onSubmit = async () => {
            AuthStore.post();
            setComment('')
            setNumOfComments(prevState => ({
                ...prevState,
                [postId]: (prevState[postId] || initialComments) + 1
            }));
          };
          
          const toggleLike = () => {
            const updatedLikes = (numOfLikes[postId] || initialLikes) + (isLiked[postId] ? -1 : 1);
            setNumOfLikes(prevState => ({
                ...prevState,
                [postId]: updatedLikes
            }));
            setIsLiked(prevState => ({
                ...prevState,
                [postId]: !prevState[postId]
            }));
        };

        return (
            <View
                key={postId}
                style={{
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    width: '100%',
                    marginVertical: 12,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    shadowColor: '#18274B',
                    shadowOffset: {
                        width: 0,
                        height: 4.5,
                    },
                    shadowOpacity: 0.12,
                    shadowRadius: 0.65,
                    elevation: 2,
                }}
            >
                {/* Post header */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 8,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 8,
                        }}
                    >
                        <Image
                            source={img}
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 80,
                            }}
                        />

                        <View style={{ marginLeft: 12 }}>
                            <Text
                                style={{ ...FONTS.body4, fontWeight: 'bold' }}
                            >
                                {name}
                            </Text>
                            <Text
                                style={{
                                    ...FONTS.body4,
                                    color: COLORS.primary,
                                    fontWeight: 'bold',
                                }}
                            >
                                {tag}
                            </Text>
                        </View>
                    </View>

                    <MaterialCommunityIcons
                        name="dots-vertical"
                        size={24}
                        color={COLORS.black}
                    />
                </View>

                {/* Post content */}

                <View
                    style={{
                        marginHorizontal: 8,
                        marginVertical: 8,
                    }}
                >
                    <Text style={{ ...FONTS.body4, fontWeight: 'bold' }}>
                       {postTitle}
                    </Text>
                    <Image
                            source={postImg}
                            style={{
                                height: 150,
                                width: 350,
                                borderRadius: 10,
                                alignSelf: 'center',
                                margin: 10
                            }}
                        />
                    <Text style={{ ...FONTS.body4 }}>
                        {postContent}
                    </Text>
                </View>

                <View
                    style={{
                        marginHorizontal: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 5,
                    }}
                >
                    <Ionicons
                        name="location-outline"
                        size={21}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            fontSize: 12,
                            fontFamily: 'regular',
                            color: COLORS.primary,
                            marginLeft: 4,
                        }}
                    >
                        {locAndTime}
                    </Text>
                </View>

                {/* Posts likes and comments */}

                <View
                    style={{
                        marginHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 5
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',

                                alignItems: 'center',
                                marginRight: SIZES.padding2,
                            }}
                        >
                            <Pressable onPress={()=>toggleLike(postId)}>
                            <MaterialIcons
                                name="favorite"
                                size={20}
                                color={isLiked[postId] ? COLORS.primary : 'lightgrey'}
                            />
                            </Pressable>
                           
                            <Text style={{ ...FONTS.body4, marginLeft: 2 }}>
                                {postLikes}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',

                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="message-text-outline"
                                size={20}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.body4, marginLeft: 2 }}>
                                {postComments}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        {/* <View>
                            <Text
                                style={{ ...FONTS.body4, fontWeight: 'bold' }}
                            >
                                Liked By 340
                            </Text>
                        </View> */}
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}
                        >
                            {users.map((user, index) => (
                                <Image
                                    source={user}
                                    key={index}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: 999,
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        marginLeft: -5,
                                    }}
                                />
                            ))}
                        </View>
                    </View>
                </View>

                {/* comment section */}

                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 8,
                        paddingVertical: 18,
                        borderTopWidth: 1,
                        borderTopColor: '#FDF6ED',
                    }}
                >
                    <Image
                        source={images.user2}
                        resizeMode="contain"
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 26,
                            marginRight: 10
                        }}
                    />

                    <View
                        style={{
                            flex: 1,
                            height: 45,
                            borderRadius: 26,
                            borderWidth: 1,
                            borderColor: '#CCC',
                            //marginLeft: 12,
                            padding: 12,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            
                        }}
                    >
                        <TextInput
                            placeholder="Add a comment"
                            placeholderTextColor="#CCC"
                            value={comment}
                            onChangeText={setComment}
                            selectionColor={'grey'}
                        />
                        <Pressable onPress={()=>onSubmit(postId)} >
                        <MaterialIcons
                            name="send"
                            size={17}
                            color={'grey'}
                            
                        />
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            
            <View style={{ flex: 1, paddingHorizontal: 22 }}>
              
                <ScrollView showsVerticalScrollIndicator={false}>
                    {renderSearchBar()}
                    {renderFeedPost(1,images.user1, 'John Marston', '#reading', 'love reading', 'Just finished reading a great book! Highly recommend it to everyone.', ' Gold City | 10 mins ago', 12, 5, users1, images.post2)}
                    {renderFeedPost(2,images.user3, 'Emily Jones', '#Food','Culinary Delights in Italy',' Indulging in authentic Italian cuisine in the heart of Rome. From pasta to gelato, every bite is a delight for the taste buds. #ItalianCuisine #Foodie', 'Rome | 25 mins ago', 58,15, users2, images.post6 )}
                    {renderFeedPost(3,images.user4, 'Alex Brown', '#Technology', ' Latest Tech Gadgets Unveiled', 'Attended the tech expo and got a sneak peek at the latest gadgets hitting the market. From AI assistants to foldable smartphones, the future looks exciting! #TechTrends #Innovation', 'San Fran | 3 hrs ago', 150,25, users3, images.post7)}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Feed
