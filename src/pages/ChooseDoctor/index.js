import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {Fire} from '../../config';

const ChooseDoctor = ({navigation, route}) => {
  const itemCategory = route.params;
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    callCategoryDoctor(itemCategory.category);
  }, [itemCategory.category]);

  const callCategoryDoctor = category => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        console.log('category', res.val());
        const oldData = res.val();
        const data = [];
        Object.keys(oldData).map(item => {
          data.push({
            id: item,
            data: oldData[item],
          });
        });
        setListCategory(data);
      });
  };

  return (
    <View>
      <Header
        title={`Pilih ${itemCategory.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      {listCategory.map(item => {
        return (
          <List
            profile={{uri: item.data.photo}}
            title={item.data.fullName}
            desc={item.data.gender}
            type="next"
            onPress={() => navigation.navigate('DoctorProfile', item)}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({});
