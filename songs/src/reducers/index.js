import { combineReducers } from 'redux';

// Overkill to store songs as a reducer,
// but placing it here to better learn redux
const songsReducer = () =>{
    return [
        {title: 'Little Black Submarines', duration: '4:11'},
        {title: 'Mr. Brightside', duration: '3:43'},
        {title: 'All Apologies', duration: '3:49'},
        {title: 'The Hills', duration: '3:55'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});