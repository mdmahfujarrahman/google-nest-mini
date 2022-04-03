import React from "react";
import "./Home.css";
import BackgroundVideo from "../../video/background.mp4";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const firstThreeReview = reviews.slice(0, 3);
    return (
        <div>
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
                        better than ever with 40% stronger <br /> bass than the
                        original Mini. And the Google Assistant is a huge help
                        around the house.
                    </p>
                    <div className="flex justify-center my-6 ">
                        <button className="text-blue-700 hover:text-white border border-blue-800 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                            Buy Now
                        </button>
                    </div>
                </div>
                <video className="mx-auto" autoPlay loop muted>
                    <source src={BackgroundVideo} type="video/mp4" />
                </video>
            </section>
            <section className="review-container my-10">
                    <h1 className="brand-color text-5xl text-center">
                        Customer Review
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
                        {firstThreeReview.map((review) => (
                            <Review key={review.id} review={review}></Review>
                        ))}
                    </div>
            </section>
        </div>
    );
};

export default Home;
