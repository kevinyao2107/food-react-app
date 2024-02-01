import React from 'react';

function PlatCard(props) {
  return (
    <li className='platlist-item'>
      <div className='platlist-item__image'>
        <img src={props.Plats.image} alt='Image' />
        <span className='platlist-item__evailaible'>
          {props.Plats.isAvaliable ? 'Disponible' : 'Indisponible'}
        </span>
      </div>
      <div className='platlist-item__details'>
        <h4>{props.Plats.name}</h4>
        <span>{props.Plats.date_creation}</span>
        <p>{props.Plats.description}</p>
        <button>Supprimer</button>
      </div>
    </li>
  );
}

export default PlatCard;
