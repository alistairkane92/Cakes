import React from 'react'

const Cake = (props) => {
  return(
    <div className="cake-div">
      <img className="cake-img" key={props.cake.index} value={props.cake.index} src={props.cake.imageUrl} alt="cake"/>
      <h3 className="cake-name">{props.cake.name}</h3>
    </div>
  )
}

export default Cake
