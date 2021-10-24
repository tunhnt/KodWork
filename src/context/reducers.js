import { Alert } from 'react-native'

export default function (state, action) {
    switch (action.type) {
        case 'ADD_FAVORITES':
            const {id} = action.payload;

            const filtered = state.fav.find(item => item.id === id.id)

            let newList = [];
          

            if(filtered) {
                Alert.alert('Hey!', 'This job already added in favorites...');

                return state;
            } else {
                const newList = [...state.fav, id];
                 return {...state, fav: newList}
            }

           
    
        case 'REMOVE_FAVORITE':
            return { ...state, fav: state.fav.filter(i => i.id !== action.payload.id) }
  
        default:
            
            return state;
    }
}