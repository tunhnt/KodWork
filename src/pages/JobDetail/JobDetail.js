import React, {useState} from 'react';

import { View, FlatList, Text } from 'react-native'

import Config from '../../../config';
import useFetch from '../../components/hooks/useFetch';

// styles
import styles from './JobDetail.style';

import DetailCard from '../../components/DetailCard';


import Error from '../../components/Error'
import Loading from '../../components/Loading'

import { useDispatch } from 'react-redux';


function JobDetail ({route}) {
    const {id} = route.params;
    const {loading, data, error} = useFetch(`${Config.API_JOBS_URL}/${id}`); 

    const dispatch = useDispatch();

    const handleAdd = () => {
     dispatch({type: 'ADD_FAVORITES', payload: {id: data}});
     console.log("handle add fonk calisti")
    }

    const renderDetail = ({item}) => (
       <DetailCard detail={item} handleAdd={handleAdd} />  
      );

      if (error) {
        return <Error />
      }
    
      if(loading) {
        return <Loading />
      }

    return(
        <View style={styles.container}>
             <FlatList  data={[data]} renderItem={renderDetail} keyExtractor={item => item.id} />
        </View>
    );
}

export default JobDetail;