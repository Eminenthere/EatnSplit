import React from 'react'
import Button from './Button'

const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type='text' />

      <label>🧍🏻 your expense</label>
      <input type='text' />

      <label>🧑🏼‍🤝‍🧑🏻 Friend's expense</label>
      <input type='text' disabled />

      <label>🤑 Who is paying the bill?</label>

      <select>
        <option value='User'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}

export default FormSplitBill
