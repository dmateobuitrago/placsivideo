import React from 'react';
import {connect} from 'react-redux';
import '../assets/styles/components/Player.scss';

const Player = props => {
    const {id} = props.match.params;

    const goBack = () => {
        props.history.goBack();
    }
    return (
        <>
            <div className="player">
                <video controls autoPlay muted>
                    <source src="" type="video/mp4" />
                </video>
            </div>
            <div className="player-back">
                <button type="button" onClick={goBack}>Regresar</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

export default connect(mapStateToProps,null)(Player)