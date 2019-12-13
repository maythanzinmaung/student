import React from 'react';
import {
  Text,
  View,
  Flatlist,
  Image,
  StyleSheet
} from 'react-native';



function Item({ Address }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{Address}</Text>
    </View>
  );
}

export default class ResultScreen extends React.Component {
        constructor(props) {
          super(props);
          this.state={
            recommendData :[]
          }
        }

        componentDidMount(){
          fetch("http://46adf3cc.ngrok.io/api/restaurants/recommend")
          .then(res => res.json)
          .then (res => {
            this.setState ({
              recommendData : res
            })
          })
          .catch(error => {
            console.log('error =', error);
          });
        }
          
        render(){
          const data=this.state.recommendData;
          console.log(data)
          return(
            <View style={styles.container}>
              <Flatlist 
               data= {this.state.recommendData}
               keyExtractor = {item => item.id}
               renderItem = { ({item }) => <Item Address ={item.Address} />}
              
              />
            </View>
          );
        }
}

const styles= StyleSheet.create({
  container: {
    flex:1
  }
})