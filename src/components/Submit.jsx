import React from 'react'
import { useFormStatus } from 'react-dom'

export default function Submit() {

  const{pending} = useFormStatus();

  return (
    <div>  
      <p className="actions">
          <button type="submit" disabled={pending}>
            {pending?"Submitting....":"Submit"}
          </button>
      </p>
    </div>
  )
}
