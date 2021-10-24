import React from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './DetailCard.style';



const DetailCard = ({detail, handleAdd}) => {
   
  return (
    <View style={styles.container}>
        <View style={styles.top_container}>
            <Text style={styles.job_name}>{detail.name}</Text>
            <View style={styles.location_section}>
                <Text style={styles.job_location_c}>Location: </Text>
                <Text style={styles.job_location}>{detail.locations[0].name}</Text>
            </View>
            <View style={styles.level_section}>
                <Text style={styles.job_level_c}>Job Level: </Text>
                <Text style={styles.job_level}>{detail.levels[0].name}</Text>
            </View>
            <Text style={styles.job_detail}>Job Detail</Text>
        </View>
        <View style={styles.body_container}>
            <HTMLView
                value={detail.contents}
                stylesheet={styles}
            />
        </View>
        <View style={styles.footer_container} >
            <TouchableOpacity onPress={() => {null}} style={styles.buttons}>
                <Icon name="login" size={20} color="#fff" />
                <Text style={styles.button_text}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAdd()} style={styles.buttons}>
                <Icon name="heart" size={20} color="#fff" />  
                <Text style={styles.button_text}>Favorite Job</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  );
};

export default DetailCard;
