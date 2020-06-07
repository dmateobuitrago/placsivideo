import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({mylist, trends, originals}) => {
    
    return (
        <div className="app">
            <Search />
            {
                mylist.length > 0 &&
                <Categories key="1" title="My list">
                    <Carousel>
                    {mylist.map( item => {
                            return(
                                <CarouselItem
                                    key={item.id}
                                    {...item}
                                />
                            )
                        })}
                    </Carousel>
                </Categories>
            }
            {
                trends.length > 0 &&
                <Categories key="2" title="Trends">
                    <Carousel>
                        {trends.map( item => {
                            return(
                                <CarouselItem
                                    key={item.id}
                                    {...item}
                                />
                            )
                        })}
                    </Carousel>
                </Categories>
            }
            {
                originals.length > 0 &&
                <Categories key="3" title="Originals">
                    <Carousel>
                        {originals.map( item => {
                            return(
                                <CarouselItem
                                    key={item.id}
                                    {...item}
                                />
                            )
                        })}
                    </Carousel>
                </Categories>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return{
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
    }
}

export default connect(mapStateToProps, null)(Home);