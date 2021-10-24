import React, {useState} from 'react';

import { View, Text, FlatList } from 'react-native';

import {useSelector} from 'react-redux';

import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';

import { useDispatch } from 'react-redux';

import fav from '../../context/store';


function Favorites ({navigation}) {
    
    const dispatch = useDispatch();

    const list = useSelector(s => s.fav);
    
    const handleSelect = id => {
        navigation.navigate('JobDetail', {id});
      };

        const removeFavorite = item => {
            dispatch({type: 'REMOVE_FAVORITE', payload: {id: item}})
        }

    myKeyExtractor = () => {
        return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
    };

    const renderFavorite = ({item}) => (
        <FavoriteCard job={item} onSelect={() => handleSelect(item.id)} removeFavorite={() => removeFavorite(item.id)}/>
      );

    console.log("list length----" + list.length)

    return(
        <View>
            <FlatList
                data={list}
                keyExtractor={myKeyExtractor}
                renderItem={renderFavorite}            
            />
        </View>
    );
}

export default Favorites;