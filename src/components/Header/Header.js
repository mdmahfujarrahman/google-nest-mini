import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
    return (
        <nav className="flex align-center">
            <h5 className="text-3xl w-40 font-bold brand-color">Nest Mini</h5>
            <div className="flex justify-between items-center ml-6 w-full">
                <div className="flex space-x-14">
                    <CustomLink className="text-xl" to="">
                        Home
                    </CustomLink>
                    <CustomLink className="text-xl" to="">
                        Review
                    </CustomLink>
                    <CustomLink className="text-xl" to="">
                        Shop
                    </CustomLink>
                    <CustomLink className="text-xl" to="">
                        Blog
                    </CustomLink>
                </div>
                <div>
                    <CustomLink className="text-xl" to="">
                        Dashboard
                    </CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
