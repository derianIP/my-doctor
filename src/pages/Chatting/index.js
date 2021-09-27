import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, InputChat, ItemChat} from '../../components';
import {Fire} from '../../config';
import {
  Colors,
  fonts,
  getChatTime,
  getData,
  setDateChat,
  showError,
} from '../../utils';

const Chatting = ({navigation, route}) => {
  const doctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState('');
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getUserFromLocal();
    const chatId = `${user.uid}_${doctor.data.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/`;
    const unsubcribe = Fire.database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot) {
          if (snapshot.val()) {
            const dataSnapshot = snapshot.val();
            const allDataChat = [];
            Object.keys(dataSnapshot).map(key => {
              const dataChat = dataSnapshot[key];
              const newDataChat = [];
              Object.keys(dataChat).map(itemChat => {
                newDataChat.push({
                  id: itemChat,
                  data: dataChat[itemChat],
                });
              });
              allDataChat.push({
                id: key,
                data: newDataChat,
              });
            });
            setChatData(allDataChat);
            console.log('all data chat', allDataChat);
          }
        }
      });
    return () => unsubcribe();
  }, [doctor.data.uid, user.uid]);

  const getUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  const sendChat = () => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent,
    };

    const chatId = `${user.uid}_${doctor.data.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/${setDateChat(today)}/`;

    const dataHistoryChatUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: doctor.data.uid,
    };

    const dataHistoryChatPartner = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    const urlMessageUser = `messages/${user.uid}/${chatId}`;
    const urlMessagePartner = `messages/${doctor.data.uid}/${chatId}`;

    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        Fire.database().ref(urlMessageUser).set(dataHistoryChatUser);
        Fire.database().ref(urlMessagePartner).set(dataHistoryChatPartner);
      })
      .catch(err => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="header-profile"
        title={doctor.data.fullName}
        desc={doctor.data.profession}
        photo={{uri: doctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentWrapper}>
        {chatData.map(chat => {
          return (
            <View key={chat.id}>
              <Text style={styles.date}>{chat.id}</Text>
              {chat.data.map(itemChat => {
                const isMe = itemChat.data.sendBy === user.uid;
                return (
                  <ItemChat
                    key={itemChat.id}
                    text={itemChat.data.chatContent}
                    time={itemChat.data.chatTime}
                    isMe={isMe}
                    photo={isMe ? null : {uri: doctor.data.photo}}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={sendChat}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  date: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    textAlign: 'center',
    color: Colors.text.secondary,
    marginVertical: 20,
  },
  contentWrapper: {
    flex: 1,
  },
});
