import React from "react";
import QNA from "../../img/qa.png"

const Blogs = () => {
    return (
        <div className="mt-28">
            <div>
                <img className="mx-auto" src={QNA} alt="" />
                <h2 className="text-center text-4xl brand-color font-semibold">
                    Qurstion & <span className="text-blue-700">Answered.</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <article className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div>
                        <h2 className="text-gray-800 text-2xl brand-color">
                            What is Context API?
                        </h2>
                        <p className="mt-2 text-gray-600 brand-color">
                            The structure of React is basically props used to
                            send data from one component to another. But to
                            drill prop one has to go through many levels to go
                            from one component to another. Some data needs to be
                            accessible by many elements at different nesting
                            levels. So Context API is used instead of prop
                            drill, using Context API can easily send data from
                            one component to another without any type of drill.
                        </p>
                    </div>
                </article>
                <article className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div>
                        <h2 className="text-gray-800 text-2xl brand-color">
                            What is Semantic Tags?
                        </h2>
                        <p className="mt-2 text-gray-600 brand-color">
                            The tags that give the right meaning to the content,
                            browser and developer can present the content in the
                            right way, these tags are the semantic tag. Using
                            semantic tags, search engines can easily collect
                            information from HTML. Also, the semantic tag
                            multiplies the accessibility of any application.
                            Examples of semantic elements: <code>form</code>,{" "}
                            <code>table</code> , and <code>article</code> -
                            Clearly defines its content.
                        </p>
                    </div>
                </article>
                <article className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div>
                        <h2 className="text-gray-800 text-2xl brand-color">
                            Difference Between Inline Inline-block And Block
                            Elements?
                        </h2>
                        <div className="mt-2 text-gray-600 brand-color">
                            <ul className=" mt-6">
                                <h5>👉Inline elements</h5>
                                <li className="ml-10 mt-4">
                                    Inline elements do not create new lines,
                                    they take as much width as needed. And the
                                    width and height of the inline elements
                                    cannot be set. Examples of Inline elements:{" "}
                                    <code>a</code>, <code>small</code>, and{" "}
                                    <code>span</code>
                                </li>
                            </ul>
                            <ul className=" mt-6">
                                <h5>👉Block elements</h5>
                                <li className="ml-10 mt-4">
                                    Block elements create new lines, have full
                                    width and you can set width and height.
                                    Examples of Block elements <code>h1</code>,{" "}
                                    <code>p</code>, and <code>ul</code>
                                </li>
                            </ul>
                            <ul className=" mt-6">
                                <h5>👉Inline-Block elements</h5>
                                <li className="ml-10 mt-4">
                                    Block elements create new lines, have full
                                    width and you can set width and height.
                                    Examples of Block elements
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blogs;
