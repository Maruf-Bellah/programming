import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
    console.log(props.country);
    const {name, flags,area} = props.country;
    return (
        <div className='country'>
            {/* <h3>{props.country.name.common}</h3>
            <img src={props.country.flags.png} alt="" />
            <p>Area : {props.country.area}</p> */}

            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Area : <small>{area}</small></p>
        </div>
    );
};

export default Country;