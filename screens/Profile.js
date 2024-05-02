import { View, Text, Image, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { posts, friends } from '../constants/data'

const PostsRoute = () => (
    <View
        style={{
            flex: 1,
            marginBottom: 10
        }}
    >
        <FlatList
        showsVerticalScrollIndicator={false}
            data={posts}
            numColumns={3}
            renderItem={({ item, index }) => (
                <View
                    style={{
                        flex: 1,
                        aspectRatio: 1,
                        margin: 3,
                    }}
                >
                    <Image
                        key={index}
                        source={item.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 12,
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 6,
                            }}
                        >
                            <Ionicons
                                name="eye"
                                size={14}
                                color={COLORS.white}
                            />
                            <Text style={{ color: COLORS.white }}>
                                {item.numOfViews}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="heart-outline"
                                size={14}
                                color={COLORS.white}
                            />
                            <Text style={{ color: COLORS.white }}>
                                {item.numOfViews}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        />
    </View>
)

const FriendsRoute = () => (
    <View style={{ flex: 1, marginBottom: 10 }}>
        <FlatList
        showsVerticalScrollIndicator={false}
                    data={friends}
                    numColumns={3}
                    renderItem={({ item, index }) => (
                        <View
                            key={item.id}
                            style={{
                                flex: 1,
                                aspectRatio: 1,
                                margin: 3,
                                marginBottom: 30
                            }}
                        >
                            <Image
                                    source={item.image}
                                    //resizeMode="contain"
                                    style={{
                                        width: "100%",
                                        height: '100%',
                                        borderRadius: 12,
                                        
                                    }}
                                />
                           
                            <Text
                                style={{ ...FONTS.body3, textAlign: 'center' }}
                            >
                                {item.name}
                            </Text>
                        </View>
                    )}
                />
    </View>
)

const renderScene = SceneMap({
    first: PostsRoute,
    third: FriendsRoute,
})
const Profile = () => {
    function renderProfileCard() {
        return (
            <View
                style={{
                    width: SIZES.width - 44,
                    marginHorizontal: 22,
                    paddingHorizontal: 8,
                    paddingVertical: 20,
                    //paddingTop: 30,
                    borderColor: '#F7F7F7',
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    shadowColor: '#18274B',
                    shadowOffset: {
                        width: 0,
                        height: 4.5,
                    },
                    shadowOpacity: 0.12,
                    shadowRadius: 0.65,
                    elevation: 2,
                    borderRadius: 10,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Profile image container */}
                    <View>
                        <Image
                            source={images.user2}
                            resizeMode="contain"
                            style={{
                                height: 90,
                                width: 90,
                                borderRadius: 80,
                                borderWidth: 4,
                                borderColor: '#ffffff',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            flex: 1,
                            marginLeft: 6,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ marginBottom: 10 }}>
                                <Text
                                    style={{
                                        ...FONTS.body3,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Ophelia Coleman
                                </Text>
                                <Text style={{ ...FONTS.body3}}>
                                    Graphic Designer
                                </Text>
                            </View>

                            <Feather
                                name="edit"
                                size={24}
                                color={'grey'}
                            />
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                //marginTop: 10
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#FFF9E8',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                    paddingHorizontal: 10
                                }}
                            >
                                <Text style={{fontSize: 12}}>7</Text>
                                <Text style={{ fontSize: 12 }}>Posts</Text>
                            </View>

                            <View
                                style={{
                                    backgroundColor: '#FFF9E8',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                    paddingHorizontal: 10
                                }}
                            >
                                <Text style={{ fontSize: 12 }}>24</Text>
                                <Text style={{fontSize: 12 }}>
                                    Followers
                                </Text>
                            </View>

                            <View
                                style={{
                                    backgroundColor: '#FFF9E8',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                    paddingHorizontal: 10
                                }}
                            >
                                <Text style={{ fontSize: 12 }}>6</Text>
                                <Text style={{ fontSize: 12}}>
                                    Followings
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'column',
                        marginVertical: 10,
                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>Jack of all</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...FONTS.body4 }}>Product Designer </Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.blue }}>
                            @junio
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...FONTS.body4 }}>Creator of </Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.blue }}>
                            @damnpixels
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'Media', icon: 'square-outline' },
        { key: 'third', title: 'Friends', icon: 'person-outline' },
    ])

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: COLORS.primary,
            }}
            renderIcon={({ route, focused, color }) => (
                <Ionicons
                    name={route.icon}
                    size={20}
                    color={focused ? COLORS.black : 'gray'}
                />
            )}
            style={{
                backgroundColor: '#fff',
                height: 64,
                marginBottom: 10
            }}
            renderLabel={({ focused, route }) => (
                <Text style={[{ color: focused ? COLORS.black : 'gray' }]}>
                    {route.title}
                </Text>
            )}
        />
    )

    function renderButtions() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 22,
                    marginVertical: 15,
                }}
            >
                <LinearGradient
                    colors={['#F68464', '#EEA849']}
                    style={{
                        height: 40,
                        width: 150,
                        borderRadius: SIZES.padding * 3,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AntDesign name="adduser" size={24} color={COLORS.white} />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 12,
                            color: COLORS.white,
                        }}
                    >
                        Follow
                    </Text>
                </LinearGradient>

                <LinearGradient
                    colors={['#F68464', '#EEA849']}
                    style={{
                        height: 40,
                        width: 150,
                        borderRadius: SIZES.padding * 3,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AntDesign name="message1" size={24} color={COLORS.white} />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 12,
                            color: COLORS.white,
                        }}
                    >
                        Message
                    </Text>
                </LinearGradient>
            </View>
        )
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
                
            }}
        >
            <View style={{ flex: 1}}>
                {renderProfileCard()}
                {renderButtions()}
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 22,
                    }}
                >
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={renderTabBar}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile
