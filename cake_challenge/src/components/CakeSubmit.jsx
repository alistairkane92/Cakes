import React, {Component} from 'react'
import { redirect } from 'react-router-dom'

class CakeSubmit extends Component {
  constructor () {
    super();
  }

  handleSubmit(event){
    event.preventDefault();

    // let url = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes"
    let payload = {
      name: this.refs.name.value,
      comment: this.refs.comment.value,
      imageUrl: this.refs.img.value,
      yumFactor: this.refs.yumFactor.value
    }

    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(payload),
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // }).then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));
  }

  render(){
    return(
      <div>
        <form name="cake_submission" className="form" onSubmit={this.handleSubmit.bind(this)}>
          <div id="form-div">

            <label className="cake-name-label" htmlFor="cake-name">Submit Cake</label>
            <input ref="name" type="text" placeholder="Name"/>
            <input ref="comment" type="text" placeholder="Comment"/>
            <select ref="yumFactor">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input ref="img" type="text" placeholder="ImageUrl"/>

            <button type="submit" id="cake-submit-btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CakeSubmit
