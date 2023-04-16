import React from 'react'
import '../assets/style/components/checkbox.css'

function Checkbox({ label, checked, onChange }) {
  return (
    <label>
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
  )
}

export default Checkbox