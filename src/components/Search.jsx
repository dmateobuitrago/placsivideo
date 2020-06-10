
import React from 'react';
import {connect} from 'react-redux';
import {searchRequest} from '../actions';
import classNames from 'classnames';


import '../assets/styles/components/Search.scss'

const Search = props => {
    const inputClass = classNames({
        input: true,
        search: true
    })

    const handleSearch = event => {
        props.searchRequest(event.target.value)
    }

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input onChange={handleSearch} type="text" className={inputClass} placeholder="Buscar..." />
        </section>
    )
}

const mapDispatchToProps = {
    searchRequest,
}


export default connect(null, mapDispatchToProps)(Search);