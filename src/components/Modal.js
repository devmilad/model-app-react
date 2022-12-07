import React from 'react'
import "./modal.css"
export default function Modal({children,closebtn}) {
  return (
    <div>
      <div className='modal-backdrop'>
        <div className='modal'>
           {children}
           <button onClick={closebtn}>Close</button>
        </div>
      </div>
    </div>
  )
}
