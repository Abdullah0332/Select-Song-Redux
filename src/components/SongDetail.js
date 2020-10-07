import React from 'react';
import { connect } from 'react-redux';

const SelectedSong = ({ song }) =>{
    if (!song){
        return (
            <div>
                Select a Song
            </div>
        )
    }
    return (
        <div>
            <h3>Details for : </h3>
            <p>
                <b>Title : </b>{song.title}<br />
                <b>Duration : </b>{song.title}
            </p>
        </div>
    )
}

const mapStateProps = (state) =>{
    return { song : state.SelectedSong }
}

export default connect(mapStateProps)(SelectedSong)