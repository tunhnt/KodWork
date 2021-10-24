import React from 'react';
import {View, Text, TouchableWithoutFeedback, Button} from 'react-native';

import styles from './FavoriteCard.style';

const FavoriteCard = ({job, onSelect, removeFavorite}) => {

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.job_name}>{job.name}</Text>
        <Button onPress={removeFavorite} title="remove" color="#EF5350"/>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavoriteCard;
