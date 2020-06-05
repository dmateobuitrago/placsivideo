import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import '../assets/styles/App.scss';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => (
    <div className="app">
        <Header/>
        <Search/>
        <Categories title="Titulo Uno">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        <Categories title="Titulo Dos">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        <Footer/>
    </div>
);

export default App