import React from 'react';
import NotFoundMedia from '../../video/NotFound.mp4'

const NotFound = () => {
    return (
        <div className="mt-32">
            <h1 className="text-center text-5xl brand-color my-4">
                Hey, where did you take me? <br />{" "}
                <span className="text-blue-700">
                    I can't see anything here.
                </span>
            </h1>
            <video className="mx-auto" autoPlay loop muted>
                <source src={NotFoundMedia} type="video/mp4" />
            </video>
            <div className="text-center brand-color mt-4">
                <h4 className="text-5xl">Awww.... Cool Down.</h4>
                <p className="text-xl my-4">
                    It's just a{" "}
                    <span className="text-blue-700">404 error!!</span>
                </p>
            </div>
        </div>
    );
};

export default NotFound;