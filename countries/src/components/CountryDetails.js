import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CountryDetails = () => {
    
    let {state} = useLocation();
   
    return (
        <section className="countryDetails">
        <h1>{state.name}</h1>
                <article>
                    <div className="wrapper">
                        <div className="details-containers"><h4>Country:</h4><p className="details-p">{state.name}</p></div>
                        <div className="details-containers"><h4>Capital:</h4> <p className="details-p">{state.capital}</p></div>
                        <div className="details-containers">
                            <h4>Currency:</h4>
                            <p className="details-p">{state.currencies[0].name}</p>
                            <p className="details-p">{state.currencies[0].symbol}</p>
                            <p className="details-p">{state.currencies[0].code}</p>
                        </div>
                    </div>
                </article>
            <Link className="btn" to={"/"}>Back Home</Link>
        </section>
    )
};

export default CountryDetails;