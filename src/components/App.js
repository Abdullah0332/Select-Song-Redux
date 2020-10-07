import React, { Component } from 'react'
import SongList from './SongsList'
import SelectedSong from './SongDetail'

export default class App extends Component{
    render(){
        return(
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className="column eight wide">
                        <SelectedSong />
                    </div>
                </div>
            </div>
            
        )
    }
}