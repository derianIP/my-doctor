import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components';
import {
  DoctorCategory,
  DoctorRating,
  UserProfile,
  NewsItem,
} from '../../components/molecules';
import {Colors, fonts} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionWrapper}>
            <Gap height={30} />
            <UserProfile />
            <Text style={styles.welcomeText}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.categoryWrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.categoryWrapper}>
                <Gap width={32} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.titleSection}>Top Rated Doctors</Text>
            <DoctorRating />
            <DoctorRating />
            <DoctorRating />
            <Text style={styles.titleSection}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
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
