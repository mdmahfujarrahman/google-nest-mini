import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    padding: match ? "10px" : "none",
                    borderRadius: match ? "25px" : "none",
                    backgroundColor: match ? "dark" : "white",
                    boxShadow: match ? "0 0 3px #888888" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;