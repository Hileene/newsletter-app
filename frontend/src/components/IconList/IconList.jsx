import React from 'react'
import ListIcon from '../../assets/images/icon-list.svg'
import './iconlist.css'

function IconList() {
  return (
    <div>
      <ul>
        <li>
          <img src={ListIcon} alt="List Icon" /> Product discovery and building
          what matters
        </li>
        <li>
          <img src={ListIcon} alt="List Icon" /> Measuring to ensure updates are
          a success
        </li>
        <li>
          <img src={ListIcon} alt="List Icon" /> And much more!
        </li>
      </ul>
    </div>
  )
}

export default IconList
