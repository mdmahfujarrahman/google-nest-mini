import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className="my-36">
            <div>
                <h1 className="text-center text-4xl font-bold brand-color">
                    What are{" "}
                    <span className="text-blue-700">our customers saying?</span>
                </h1>
                <p className="text-center brand-color my-2">
                    Access the results from the latest Google Nest Mini
                    Collections Customer Satisfaction Survey as well as
                    <br /> the reviews of customers in written testimonials.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                    <Review key={review.id} review={review}></Review>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
