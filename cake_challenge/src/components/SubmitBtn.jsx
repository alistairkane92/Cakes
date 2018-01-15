import React from 'react'
import { Link } from 'react-router-dom'

const SubmitBtn = () => {
  return (<Link to={"/submit"}><button>Submit New Cake</button></Link>)
}

export default SubmitBtn
