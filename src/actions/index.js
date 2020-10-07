// Action creater
export const SelectSong= song =>{
    // Action return
    return{
        type : 'SONG_SELECTED',
        payload : song
    };
};