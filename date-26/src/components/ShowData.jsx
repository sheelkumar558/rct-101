import React from 'react'

const ShowData = ({data}) => {
  return (
    <div>
       <div>
           <ul>
               <li>{data.username}</li>
               <li>{data.email}</li>
               <li>{data.gender}</li>
               <li>{data.age}</li>
               <li>{data.city}</li>
               <li>{data.isIndian}</li>
           </ul>
       </div>
    </div>
  )
}

export default ShowData
