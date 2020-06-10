import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getVideoSource} from '../actions'
import NotFound from '../containers/NotFound';
import '../assets/styles/components/Player.scss';

const Player = props => {
    const {id} = props.match.params;
    const hasVideo = Object.keys(props.playing).length > 0

    useEffect(() => {
        props.getVideoSource(id)
        document.addEventListener("keydown", handleKeyPress, false);
    },[]);

    const goBack = () => {
        props.history.goBack();
    }

    const handleKeyPress = event => {
        event.keyCode === 27 && goBack()
    }
    return (
        hasVideo ?
        <>
            <div className="player">
                <video controls autoPlay muted>
                    <source src={props.playing.source} type="video/mp4" />
                </video>
            </div>
            <div className="player-back">
                <button type="button" onClick={goBack}>Regresar</button>
            </div>
        </>
        :
        <NotFound/>
    )
}

const mapStateToProps = state => {
    console.log('mapStateToProps')
    console.log(state)
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)