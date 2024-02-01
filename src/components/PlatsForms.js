import React, { useState } from 'react';
import './plats-form.css';

function PlatsForms(props) {
  const [name, setName] = useState();
  const [date_creation, setDate_creation] = useState();
  const [description, setDescription] = useState();
  const [isAvaliable, setIsAvaliable] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitPlat(name);
  };
  return (
    <div className='form-container'>
      <form onSubmit={submitHandler} action=''>
        <label htmlFor='name'>Nom</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
          type='text'
          placeholder='Nom de restaurant'
        />
        <label htmlFor='description'>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          id='description'
          placeholder='Description du restaurant'
        />
        <label htmlFor='url'>url</label>
        <input id='url' type='url' placeholder='image url' />
        <label htmlFor='url'>Disponibilité</label>
        <select
          onChange={(e) => setIsAvaliable(e.target.value)}
          name='url'
          id='url'
        >
          <option value='true'>Disponible</option>
          <option value='false'>Indisponible</option>
        </select>
        <div className='form-bottom'>
          <div className='form-bottom__date'>
            <label htmlFor='name'></label>
            <input
              value={date_creation}
              onChange={(e) => setDate_creation(e.target.value)}
              style={{ marginBottom: '0px' }}
              id='name'
              type='date'
            />
          </div>
          <div className='form-bottom__btn'>
            <button>Nouveau</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlatsForms;
