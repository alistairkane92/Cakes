import React from 'react'

const Cake = (props) => {
  return(
    <div>
      <img className="cake-img" key={props.cake.index} value={props.cakeindex} src={props.cake.imageUrl} alt="cake-image"/>
      <h3 className="cake-name">{props.cake.name}</h3>
    </div>
  )
}

export default Cake
