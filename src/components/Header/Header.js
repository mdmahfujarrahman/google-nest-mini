import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
    return (
        <nav className="flex align-center">
            <h5 className="text-3xl w-40 font-bold brand-color">Nest Mini</h5>
            <div className="flex justify-between items-center ml-6 w-full">
                <div className="flex space-x-14">
                    <CustomLink to="/" className="text-xl">
                        Home
                    </CustomLink>
                    <CustomLink to="review" className="text-xl">
                        Review
                    </CustomLink>
                    <CustomLink to="shop" className="text-xl">
                        Shop
                    </CustomLink>
                    <CustomLink to="blogs" className="text-xl">
                        Blogs
                    </CustomLink>
                </div>
                <div>
                    <CustomLink to="dashboard" className="text-xl">
                        Dashboard
                    </CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
