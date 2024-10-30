import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Chats() {

    const chatData = useSelector((state) => state.chatData.value) || [
        { _id: 123, question: "Loading", answer: "Loading" },
        { _id: 321, question: "Loading1", answer: "Loading1" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>Chats</Text>

            {
                chatData.data.map((data) => {
                    return (
                        <View key={data._id} style={styles.message_container}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={styles.question_conatiner}>Question: {data.question}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={styles.answer_conatiner}>Answer: {data.answer}</Text>
                            </View>
                        </View>
                    )
                })
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    main_text: {
        color: 'black'
    },
    message_container: {
        // borderWidth: 1,
        marginVertical: 10
    },
    question_conatiner: {
        color: 'black',
        marginVertical: 10,
        maxWidth: '95%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: '#F9F6EE',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,

        fontFamily: 'PlaywriteGBS-Regular'
    },
    answer_conatiner: {
        color: 'black',
        marginVertical: 10,
        maxWidth: '95%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: '#F9F6EE',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,

        fontFamily: 'PlaywriteGBS-Regular'
    }
})