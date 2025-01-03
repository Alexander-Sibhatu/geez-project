import React, { useState } from 'react'

const VerbPage = ({verb}) => {
    const [showDetail, setShowDetail] = useState(false);

    const toggleDetail = () => {
        setShowDetail((prev) => !prev)
    }
  return (
    <div className=''>
        <p className='text-lg' onClick={toggleDetail} style={{cursor: 'pointer', color: '#5C4033'}}>
            <strong>{verb.Gis}</strong>
        </p>
        {showDetail && <p>ትርጉም: {verb.translation}</p>}
    </div>
  )
}

export default VerbPage