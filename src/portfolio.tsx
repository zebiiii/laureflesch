import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './portfolio.css'
import Header from './header';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function importAll(r:__WebpackModuleApi.RequireContext) {
    let images:{ [index: string]: any; } = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function renderItem(item: React.ReactNode, options?: { isSelected: boolean }) {
    return <div>
        {item}
    </div>
};

function Portfolio() {

    const [width, setWidth] = useState<number>(window.innerWidth);
    let images;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    if (isMobile)
        images = importAll(require.context('./img/img/mobile', false, /\.(png|jpe?g|svg)$/));
    else
        images = importAll(require.context('./img/img', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="">
        <Header title="menu"/>
        <div className="portfolio column-center">
            <Carousel className="carousel" interval={5000} autoPlay={true} stopOnHover={true} swipeable={true} showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true}>
                <div className='slide'>
                    <img src={images['33.jpeg']}/>
                </div>
                <div className='slide'>
                    <img src={images['1.jpeg']}/>
                </div>
                <div>
                    <img src={images['2.jpeg']} />
                </div>
                <div>
                    <img src={images['3.jpeg']} />
                </div>
                <div>
                    <img src={images['4.jpeg']} />
                </div>
                <div>
                    <img src={images['5.jpeg']} />
                </div>
                <div>
                    <img src={images['6.jpeg']} />
                </div>
                <div>
                    <img src={images['7.jpeg']} />
                </div>
                <div>
                    <img src={images['8.jpeg']} />
                </div>
                <div>
                    <img src={images['9.jpeg']} />
                </div>
                <div>
                    <img src={images['10.jpeg']} />
                </div>
                <div>
                    <img src={images['11.jpeg']} />
                </div>
                <div>
                    <img src={images['12.jpeg']} />
                </div>
                <div>
                    <img src={images['13.jpeg']} />
                </div>
                <div>
                    <img src={images['14.jpeg']} />
                </div>
                <div>
                    <img src={images['15.jpeg']} />
                </div>
                <div>
                    <img src={images['16.jpeg']} />
                </div>
                <div>
                    <img src={images['17.jpeg']} />
                </div>
                <div>
                    <img src={images['18.jpeg']} />
                </div>
                <div>
                    <img src={images['19.jpeg']} />
                </div>
                <div>
                    <img src={images['20.jpeg']} />
                </div>
                <div>
                    <img src={images['24.jpeg']} />
                </div>
                <div>
                    <img src={images['25.jpeg']} />
                </div>
                <div>
                    <img src={images['26.jpeg']} />
                </div>
                <div>
                    <img src={images['27.jpeg']} />
                </div>
                <div>
                    <img src={images['28.jpeg']} />
                </div>
                <div>
                    <img src={images['29.jpeg']} />
                </div>
                <div>
                    <img src={images['30.jpeg']} />
                </div>
                <div>
                    <img src={images['31.jpeg']} />
                </div>
                <div>
                    <img src={images['32.jpeg']} />
                </div>
                <div>
                    <img src={images['34.jpeg']} />
                </div>
            </Carousel>
            <p className="portfolio-title">laure flesch</p>
        </div>
    </div>

  );
}

export default Portfolio;
