import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RecommendRes} from './RecommendRes';
import DetailScreen from './stack';

const {height, weight} = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  componentDidMount() {
    this.startHeaderHeight = 100 + StatusBar.currentHeight;
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Find & Dine </Text>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
            }}>
            <View style={styles.searchBar}>
              <Icon
                name="search"
                size={20}
                style={{marginRight: 10, marginTop: 12}}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search your favourite food"
                plachholderTextColor="grey"
                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
              />
            </View>
          </View>
          <View style={styles.recommend}>
          <ScrollView>
            
              <Text style={styles.text}>Recommended Restaurants</Text>

              <View style={styles.container}>
                <RecommendRes images={images} />
              </View>
              
          </ScrollView>
              <View style={{marginTop: 10, paddingHorizontal: 20}}>
                <Text style={styles.popularText}>
                      Popular restaurants !
                </Text>
                <ScrollView>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Detail')}>
                    <Image
                      style={styles.image}
                      source={require('./image/shop3.jpg')}
                    />
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
         
          </View>
        </View>
    );
  }
}

const images = [
  'https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/SourceImage/gloria-jeans2.jpg',
  'https://blog.doemal.com/en/wp-content/uploads/sites/2/2018/08/KFC_0.png',
  'https://s1.r29static.com/bin/entry/02c/720x864,85/2196677/image.webp',
  'https://scontent.frgn5-2.fna.fbcdn.net/v/t1.0-9/28377556_896522287195125_1892675439010030859_n.jpg?_nc_cat=103&_nc_ohc=xbb7sUe-dhYAQlN6FzQi8Yqx8JeZE3KCpIiWDB4CePCvpMKL50jQQ_aHQ&_nc_ht=scontent.frgn5-2.fna&oh=494fbe377c3e8733a8db3f6ae8fffc9d&oe=5E731271',
  'https://www.capitaland.com/content/dam/capitaland-media-library/retail/Singapore/Singapore/cma-tenants/Gong%20Cha1.jpg.transform/cap-midres/image.jpg',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#e15258',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 10,
    fontFamily: 'serif',
    fontStyle: 'italic',
  },
  popularText: {
    fontSize: 20,
    fontWeight: '700',
    paddingStart: 0,
    paddingBottom: 15,
  },
  searchBar: {
    flexDirection: 'row',
    padding: 2,
    backgroundColor: 'white',
    marginHorizontal: 10,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  image: {
    flex: 1,
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  recommend: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
