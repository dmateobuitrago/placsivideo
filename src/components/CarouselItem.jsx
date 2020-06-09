import React, { Children } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { setFavorite, removeFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) => {
    const { title, year, contentRating, duration, cover, isInMyList, id } = props;

    const handleSetFavorite = () => {
        props.setFavorite(
            { id, title, year, contentRating, duration, cover }
        )
    }

    const handleRemoveFavorite = (id) => {
        props.removeFavorite(id)
    }

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                    
                    {isInMyList ?
                        <img className="carousel-item__details--img" src={removeIcon} alt="Remove Icon" onClick={() => handleRemoveFavorite(id)} />
                        :
                        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={handleSetFavorite} />
                    }
                </div>
                <p className="carousel-item__details--title">{title} {id}</p>
                <p className="carousel-item__details--subtitle">{year} {contentRating} {duration} minutos</p>
            </div>
        </div>
    )
}


CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    contentRating: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    key: PropTypes.number
}

const mapDispatchToProps = {
    setFavorite,
    removeFavorite,
}


export default connect(null, mapDispatchToProps)(CarouselItem);