import React from 'react';

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-2 m-5 bg-gray-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
