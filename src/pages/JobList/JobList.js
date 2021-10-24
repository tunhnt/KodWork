import React from 'react';

import { View, Text, FlatList } from 'react-native'

import styles from './JobList.style';

import config from '../../../config';
import useFetch from '../../components/hooks/useFetch';


import JobCard from '../../components/JobCard';

import Error from '../../components/Error'
import Loading from '../../components/Loading'



function JobList ({navigation}) {

    const {loading, data, error} = useFetch(config.API_URL);

    const handleSelect = id => {
    navigation.navigate('JobDetail', {id});
  };


    const renderJobs = ({item}) => (
        <JobCard job={item} onSelect={() => handleSelect(item.id)}  />
      );

    if (error) {
        return <Error />;
      }
      
      if(loading) {
        return <Loading />
      }

    return(
        <View style={styles.container}>
          <FlatList  data={data.results} renderItem={renderJobs} />
        </View>
    );
}

export default JobList; 