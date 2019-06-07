import React from 'react';
import propTypes from 'prop-types'
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
        {props.cards.map(card =>(
          <Card key={`${card.tab} ${Math.random()}`} card={card} />
        ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: propTypes.arrayOf(propTypes.object).isRequired
}
export default Cards;