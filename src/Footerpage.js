import React from 'react';
import "./App.css";

const Footerpage = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        // <div id="main-footer" className="text-center p-2"> 
        // m-auto 왼쪽오른쪽 여백 알아서 맞춰라. m : margin
        <div id="main-footer"> 
                    <p>
                        Copyright &copy; <span>{thisYear()}</span>
                    </p>
                    <p>
                        Instagram @Moving_Country99
                    </p>

        </div>
    )
};

export default Footerpage;