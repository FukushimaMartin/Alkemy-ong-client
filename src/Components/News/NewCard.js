import React from 'react'
import { Link } from 'react-router-dom'
import './NewCard.css'

const NewCard = ({item:{ name, content, image, id }}) => {
  return (
    <div
<<<<<<< HEAD
      className='columns box new-card'
=======
      className='column box mx-4'
>>>>>>> 27e2c4e2f77167ba5f432b57dc3bc64bea91a990
      style={{ background: '#7E9AFD', borderRadius: '1rem', border: '1px solid blue' }}
    >
      <div
        className='column is-flex-grow-1 is-flex-shrink-0 new-image'
        style={{
          background: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
<<<<<<< HEAD
          borderRadius: '1rem'
        }}
      ></div>
      <div className='column px-4 is-flex is-flex-direction-column is-align-items-flex-start'>
        <h2 className='is-size-5 has-text-black has-text-left has-text-weight-light mb-3 new-title'>
          {title}
=======
          borderRadius: '1rem',
          height: '12rem',
          // margin: '1rem'
        }}
      ></div>
      <div className='column px-4 is-flex is-flex-direction-column is-align-items-flex-start'>
        <h2 className='is-size-5 has-text-black has-text-left has-text-weight-light mb-3'>
          {name}
>>>>>>> 27e2c4e2f77167ba5f432b57dc3bc64bea91a990
        </h2>
        <p className='has-text-black mt-1 has-text-weight-light new-text'>{content}</p>
        <Link to={`news/${id}`} style={{ marginTop: 'auto', width: '100%' }}>
          <span
            className='button is-fullwidth mt-2 box is-size-6'
            style={{ background: 'blue', color: 'white', border: 'blue' }}
          >
            Ver novedad
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NewCard
