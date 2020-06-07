import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState'

const Home = () => {

    const initialState = useInitialState(API)
    console.log(initialState);
    
    
    return (
        <div className="app">
            <Search />
            {
                initialState.mylist.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                    {initialState.mylist.map( item => {
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
                initialState.trends.length > 0 &&
                <Categories title="Trends">
                    <Carousel>
                        {initialState.trends.map( item => {
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
                initialState.originals.length > 0 &&
                <Categories title="Originals">
                    <Carousel>
                        {initialState.originals.map( item => {
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

export default Home;