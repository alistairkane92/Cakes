import React, {Component} from 'react'

class CakeSubmit extends Component {

  handleSubmit(event){
    event.preventDefault();

    let newCake = {
      name: this.refs.name.value,
      comment: this.refs.comment.value,
      imageUrl: this.refs.img.value,
      yumFactor: this.refs.yumFactor.value
    }

    console.log(newCake);

  }

  render(){
    return(
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
    )
  }
}

export default CakeSubmit
