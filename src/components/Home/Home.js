import React from "react";
import "./Home.css";
import BackgroundVideo from "../../video/background.mp4";

const Home = () => {
    return (
        <>
            <section className="banner-container items-center mt-16">
                <div>
                    <h1 className="text-center text-4xl font-bold brand-color">
                        Google Nest Mini.
                    </h1>
                    <h1 className="text-center text-4xl font-bold brand-color mt-4">
                        Still mini. Even more mighty.
                    </h1>
                    <p className="text-center mt-6 brand-color">
                        Meet the new Nest Mini. Your music sounds bigger and
                        better than ever with 40% stronger <br/> bass than the
                        original Mini. And the Google Assistant is a huge help
                        around the house.
                    </p>
                </div>
                <video className="mx-auto" autoPlay loop muted>
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
            </section>
            <section className="review-container">
                <h2>Review container</h2>
            </section>
        </>
    );
};

export default Home;
