import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countris.css'


const Countris = () => {

    const  [countrise,setCountrise] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountrise(data))
    },[])

    return (
        <div>
            <h1>Courntris : {countrise.length}</h1>
            <div className='countris'>
            {
                countrise.map(country => <Country
                    country ={country}
                    key={country.cca3}
                ></Country>)
            }
        </div>
        </div>
    );
};

export default Countris;