import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([{
        name:"Wolverine",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVN1epItpP56Zv9Aan1VII9ufvnTQpPaZ-Tg&usqp=CAU",
    },
    {
        name:"Storm",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScarxxfN4A7RPuabsEbCzQVYzkDZSvU9rYow&usqp=CAU",
    }]);

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
              {people.map((person) => (
                <TinderCard>
                    
                </TinderCard>
            ))}  
            </div>
            
        </div>
    )
}

export default TinderCards;
