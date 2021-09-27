import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components';
import {
  DoctorCategory,
  DoctorRating,
  NewsItem,
  UserProfile,
} from '../../components/molecules';
import {Fire} from '../../config';
import {Colors, fonts, showError} from '../../utils';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const [ratedDoctor, setRatedDoctor] = useState([]);

  useEffect(() => {
    getNews();
    getCategory();
    getRatedDoctor();
  }, []);

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el != null);
          setNews(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getCategory = () => {
    Fire.database()
      .ref('category_doctor/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el != null);
          setCategory(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getRatedDoctor = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setRatedDoctor(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionWrapper}>
            <Gap height={30} />
            <UserProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcomeText}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.categoryWrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.categoryWrapper}>
                <Gap width={32} />
                {category.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      id={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.titleSection}>Top Rated Doctors</Text>
            {ratedDoctor.map(item => {
              return (
                <DoctorRating
                  key={item.id}
                  name={item.data.fullName}
                  desc={item.data.profession}
                  avatar={item.data.photo}
                  onPress={() => navigation.navigate('DoctorProfile', item)}
                />
              );
            })}
            <Text style={styles.titleSection}>Good News</Text>
          </View>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  sectionWrapper: {
    paddingHorizontal: 16,
  },
  content: {
    // paddingBottom: 16,
    backgroundColor: Colors.white,
    flex: 1,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  welcomeText: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: Colors.text.primary,
    maxWidth: 209,
    marginTop: 30,
    marginBottom: 16,
  },
  categoryWrapperScroll: {
    marginHorizontal: -16,
  },
  categoryWrapper: {
    flexDirection: 'row',
  },
  titleSection: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: Colors.text.primary,
    marginTop: 30,
  },
});
