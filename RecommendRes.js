import * as React from 'react';
import {
    StyleSheet, 
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';

const Device_Width = Dimensions.get("window").width;
  
class RecommendRes extends React.Component{
    scrollRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            selectedIndex : 0
        }
    }    
    render() {
        const {images} = this.props
        const {selectedIndex} = this.state
        return(
            <View>
                <ScrollView horizontal pagingEnabled>
                    {images.map (image => {
                        <Image 
                            key={image}
                            source={{uri:image}}
                            style={style.image}
                        />
                    }) }
                </ScrollView>
            </View>
        );
    }
}
export default RecommendRes;
const styles=StyleSheet.create({
    image: {
        height: 200,
        width: 200,

    }
})