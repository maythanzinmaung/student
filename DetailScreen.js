import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class DetailScreen extends React.Component {
    
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ScrollView>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}>
            <Image
              source={require('./image/kfc.jpg')}
              style={{width: '100%', height: 200}}
            />
          </View>
          <View>
            <Text style={styles.title}>KFC Dagon Center(II)</Text>
            <Text style={styles.type}>Western </Text>
            <Text style={styles.type}>Opening hours !!</Text>
            <Button title="More info" color="gray" onPress={() => this.props.navigation.navigate('Result')}/>
            <Text style={styles.address}>ADDRESS</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'serif',
    fontWeight: '700',
    color: 'black',
    paddingTop: 10,
  },
  type: {
    fontSize: 15,
  },
  more: {
    fontSize: 20,
  },
  address: {
    fontSize: 17,
    letterSpacing: 2,
    paddingTop: 10,
  },
});
