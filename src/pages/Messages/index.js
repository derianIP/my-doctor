import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {Fire} from '../../config';
import {Colors, fonts, getData} from '../../utils';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [chat, setChat] = useState([]);

  useEffect(() => {
    getUserFromLocal();
    const urlFirebase = `messages/${user.uid}`;
    const ref = Fire.database().ref();

    ref.child(urlFirebase).on('value', async snapshot => {
      const data = snapshot.val();
      if (data) {
        const chatHistory = [];
        const promises = Object.keys(data).map(async key => {
          const urlDoctor = `doctors/${data[key].uidPartner}`;
          const doctor = await ref.child(urlDoctor).once('value');
          chatHistory.push({
            id: key,
            doctor: doctor.val(),
            ...data[key],
          });
        });

        await Promise.all(promises);

        console.log('snapshot : ', chatHistory);
        setChat(chatHistory);
      }
    });
  }, [user.uid]);

  const getUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Messages</Text>
        {chat.map(item => {
          const dataDoctor = {
            id: item.uidPartner,
            data: item.doctor,
          };
          return (
            <List
              key={item.id}
              title={item.doctor.fullName}
              desc={item.lastContentChat}
              profile={{uri: item.doctor.photo}}
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  contentWrapper: {
    backgroundColor: Colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: Colors.text.primary,
    marginLeft: 16,
    marginTop: 30,
  },
});
