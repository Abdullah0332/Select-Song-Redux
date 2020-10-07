import { combineReducers } from 'redux';

const SongReducer = () =>{
    return[
        { title : 'Despacito' , duration : '2:15' },
        { title : 'No Scrubs' , duration : '1:05' },
        { title : 'All Star' , duration : '3:000' },
        { title : 'I Want It That Way' , duration : '3:15' }
    ]
}

const SelectedSongReducer = ( SelectSong=null , action ) =>{
    if( action.type === 'SONG_SELECTED' ){
        return action.payload;
    }
    return SelectSong;
}

export default combineReducers({
    songs : SongReducer,
    SelectedSong : SelectedSongReducer
});