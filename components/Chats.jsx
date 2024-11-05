import { StyleSheet, Text, View, ActivityIndicator, ToastAndroid, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Chats() {

    const chatData = useSelector((state) => state.chatData.value)
    const [displayedChats, setDisplayedChats] = useState([]);

    useEffect(() => {

        const timer = setTimeout(() => {
            setDisplayedChats(chatData.data);
            console.log(chatData.data)
            showToast();
        }, 1000);
        return () => clearTimeout(timer);

    }, [chatData]);

    const showToast = () => {
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            {displayedChats && displayedChats.length > 0 ? (
                displayedChats.map((data) => (
                    <View key={data._id} style={styles.message_container}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={styles.question_conatiner}>Question: {data.question}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={styles.answer_conatiner}>Answer: {data.answer}</Text>
                        </View>
                    </View>
                ))
            ) : (
                <View style={styles.loader}><ActivityIndicator size="large" color="#E64444" /></View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    main_text: {
        color: 'white'
    },
    message_container: {
        marginVertical: 10
    },
    question_conatiner: {
        color: 'white',
        marginVertical: 10,
        maxWidth: '95%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 14,
        borderRadius: 10,
        // backgroundColor: '#F9F6EE',
        backgroundColor: '#292929',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        // fontFamily: 'PlaywriteGBS-Regular'
    },
    answer_conatiner: {
        color: 'white',
        marginVertical: 10,
        maxWidth: '95%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 14,
        borderRadius: 10,
        backgroundColor: '#E64444',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        // fontFamily: 'PlaywriteGBS-Regular'
    },
    loader: {
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
