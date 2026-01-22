import React from 'react';
import Banner from '../Banner/Banner';
import Eightapp from '../EightApp/Eightapp';
import { useLoaderData } from 'react-router';

const Home = () => {
    const eightData = useLoaderData()
    console.log(eightData)
    return (
        <div>
            <Banner></Banner>
            <Eightapp eightData={eightData}></Eightapp>
           
        </div>
    );
};

export default Home;