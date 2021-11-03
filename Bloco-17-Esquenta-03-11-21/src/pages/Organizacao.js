import React, { useState, useContext } from 'react';

function Organizacao() {
  const [tarefa, setTarefa] = useState('');

  const handleChange = ({target}) => {
    const { value } = target;
    setTarefa(value)
    console.log(value)
  }

  return (
    <div>
      <input
        type="text"
        name="tarefa"
        value={tarefa}
        onChange={ handleChange }
      />
    </div>
  )
}

export default Organizacao;