import React from 'react';
import CardItem from './CardItem';

const CardList = ({cards, onPlanetSelect}) => {

    const renderedList =cards.map((card, index)=> {
        return <div style={{margin:'20px'}} key={index} ><CardItem onPlanetSelect={onPlanetSelect} card={card}/></div>;
    });
    return (
        <div className='ui grid'>{renderedList}</div>
    );
};
export default CardList;