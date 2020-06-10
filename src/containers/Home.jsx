import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({mylist, trends, originals, searchTerm, searchResults}) => {
    const isSearching = searchTerm.length > 2

    const renderSearchResults = () => {
        console.log(searchResults)
        return (
            searchResults.length > 0 ?
            <Categories key="0" title="Search results">
                <Carousel>
                {searchResults.map( item => {
                        return(
                            <CarouselItem
                                key={item.id}
                                isInMyList={false}
                                {...item}
                            />
                        )
                    })}
                </Carousel>
            </Categories>
            :
            <h1>no results for "{searchTerm}"</h1>
        )
    }

    const renderMyList = () => {
        return (
            mylist.length > 0 &&
            <Categories key="1" title="My list">
                <Carousel>
                {mylist.map( item => {
                        return(
                            <CarouselItem
                                key={item.id}
                                isInMyList={true}
                                {...item}
                            />
                        )
                    })}
                </Carousel>
            </Categories>
        )
    }

    const renderTrends = () => {
        return (
            trends.length > 0 &&
            <Categories key="2" title="Trends">
                <Carousel>
                    {trends.map( item => {
                        return(
                            <CarouselItem
                                key={item.id}
                                isInMyList={false}
                                {...item}
                            />
                        )
                    })}
                </Carousel>
            </Categories>
        )
    }

    const renderOriginals = () => {
        return (
            originals.length > 0 &&
            <Categories key="3" title="Originals">
                <Carousel>
                    {originals.map( item => {
                        return(
                            <CarouselItem
                                key={item.id}
                                isInMyList={false}
                                {...item}
                            />
                        )
                    })}
                </Carousel>
            </Categories>
        )
    }

    return (
        <div className="app">
            <Search />
            {isSearching && renderSearchResults()}
            {renderMyList()}
            {renderTrends()}
            {renderOriginals()}
        </div>
    )
};

const mapStateToProps = state => {
    return{
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
        searchTerm: state.searchTerm,
        searchResults: state.searchResults,
    }
}

export default connect(mapStateToProps, null)(Home);