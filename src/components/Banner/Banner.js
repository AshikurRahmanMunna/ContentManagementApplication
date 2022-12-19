import React from 'react';
import Lottie from "lottie-react";
import bannerLottie from "../../assets/lotties/banner.json";

const Banner = () => {
    return (
        <div className='homeBanner'>
            <div>
                <h2>Dive In The World<br />Of <span className='text-primary'>Blogs</span></h2>
                <p>Get the best blogs of this world with many categories by exploring this website.</p>
            </div>
            <div>
                <Lottie animationData={bannerLottie} loop={true} />
            </div>
        </div>
    );
};

export default Banner;