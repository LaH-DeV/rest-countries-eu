import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [sortType, setSortType] = useState('none');

    useEffect(() => {
        getCountries(sortType);
        // eslint-disable-next-line
    },[sortType]);
    
    const getCountries = async () => {
        if(countries.length < 1) {
            const response = await fetch('https://restcountries.eu/rest/v2/name/united?fields=name;capital;currencies');
            const data = await response.json();
            setCountries(data);
        } else if(countries.length>0){
            sortArray(sortType);
        }
    };

    
      
    
    const sortArray = type => {
        const types = {
            none: 'none',
            asc: 'asc',
            desc: 'desc'
        };
        const sortProperty = types[type];
        var sorted = [...countries].sort();
        switch (sortProperty) {
            case 'asc':
                sorted = [...countries].sort((a,b) => b.name.localeCompare(a.name));
                break;
            case 'desc':
                sorted = [...countries].sort((a,b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }
        setCountries(sorted);
    };

    const searchCountry = async searched => {
    //     if (searched.length <3 || searched === "") return;
    //     const response  = await fetch(`https://restcountries.eu/rest/v2/name/${searched}`);
    //     const data = await response.json();
    //     setCountries(data);
    //     if(countries.length>0){
    //         sortArray(sortType);
    //     }
    };

    return (
            <div className="page-container">
            
                <div className="filter-container">
                <input type="text" placeholder="Search for a country..." className="search" onChange={(searchedText) => searchCountry(searchedText.target.value)} />
                    <select className="select" id="select" onChange={val => setSortType(val.target.value)}>
                        <option value="">Sort by</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </div>
                <div className="container">
                    {countries.map((country, index) => {
                        const {name} = country;
                        return (
                        <Link key={index} className="link" to={{pathname:`/countries/${name}`,state:country}}>
                        <div className="country-item"><h4 className="country-name">{name}</h4>
                            </div>
                        </Link>
                        )
                    })}
                </div>
            </div>
    )
};

export default Countries;