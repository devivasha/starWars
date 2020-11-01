import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const PlanetDetail = ({card})=>{
    const [residents, setResidents] = useState([]);

    useEffect(()=> {
        const fetchResidents = async ()=>{
            const residentList = [];
            let urls = card.residents;
            let requests = await urls.map((url) => {
                return axios.get(url, {});
            });
            Promise.all(requests).then((responces) => {
                responces.map((item)=> residentList.push(item.data.name));
                setResidents(residentList)
            });
        };
       fetchResidents();
    },[]);

    return (
        <div className='ui cards'>
            <div className="card">
                <div className="content">
                    <div className="header">
                        <strong>Name:</strong> {card.name}
                    </div>
                    <div className="description" style={{margin:'15px'}}>
                        <strong>Climate:</strong> {card.climate}
                    </div>
                    <div className="description" style={{margin:'15px'}}>
                        <strong>Population:</strong> {card.population}
                    </div>
                    <div className="description" style={{margin:'15px'}}>
                        <strong>Period rotation:</strong> {card.rotation_period}
                    </div>
                    <div className="description" style={{margin:'15px'}}>
                        <strong>Diameter:</strong> {card.diameter}
                    </div>
                    <div className="description" style={{margin:'15px'}}>
                        <strong>Gravity:</strong> {card.gravity}
                    </div>
                    <div className="description" style={{margin:'15px'}}>
                        <strong>Terrain:</strong> {card.terrain}
                    </div>
                    <div className="description" style={{margin:'15px'}}>
                        <strong>Residents:</strong> <ul><DisplayData dataProp={residents} /></ul>
                    </div>
                    <Link to="/">
                        <button className="ui primary basic button">Back to home page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const DisplayData = props => {
    const { dataProp } = props;
    return (
        <>
            {dataProp.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </>
    );
};

export default PlanetDetail;
