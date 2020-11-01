import React from 'react';
import { useHistory } from 'react-router-dom';



const CardItem =({card, onPlanetSelect})=>{
    const history = useHistory();
    return (
            <div className='ui cards'
                 onClick={()=>{
                     onPlanetSelect(card);
                     history.push('/planet');
                 }}
                 style={{cursor:'pointer'}}>
                <div className="card">
                    <div className="content">
                        <div className="header">
                           {card.name}
                        </div>
                        <div className="description">
                            <strong>Climate:</strong> {card.climate}
                        </div>
                        <div className="description">
                            <strong>Population:</strong> {card.population}
                        </div>
                    </div>
                </div>
            </div>

    );

};
export default CardItem;