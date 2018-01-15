import React, { Component } from 'react'
import Cake from './Cake'

class CakeList extends Component {
  constructor(props){
    super(props)
    this.state = {
      cakes: []
    }
  }

  componentDidMount(){
    let url = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes"
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener("load", () => {
      if (xhr.status !== 200){
        return console.log("Request Failed");
      } else {
        console.log("Request Successful");
        let jsonString = xhr.responseText;
        let cakeData = JSON.parse(jsonString);
        this.setState(prevState => {
          return {cakes: prevState.cakes.concat(cakeData)};
        });
      }
    });
    xhr.send();
  }

  render(){
    if (!this.state.cakes.length){
      return null;
    }

    const cakes = (this.state.cakes.map((cake, index) => {
      return(<Cake cake={cake}/>)
    }))

    return <div id="cakes-div">{cakes}</div>
  }
}

export default CakeList
