import React from 'react';

const Review = ({review}) => {
    const { name, img, comments, rating} = review;
    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
                <img
                    className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                    src={img}
                    alt="profilephoto"
                />
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
                <p className="mt-2 text-gray-600">{comments}</p>
            </div>
            <div className="flex justify-end mt-4">
                <p className="text-xl font-medium text-indigo-500">{rating}</p>
            </div>
        </div>
    );
};

export default Review;