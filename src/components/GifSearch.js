import React, { Component } from 'react'

class GifSearch extends Component{
  constructor(){
    super()

    this.state = {
      value: ''
    }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onSearchSubmit(event){
    event.preventDefault()
    this.props.handleSubmit(this.state.value)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit= {this.onSearchSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.value}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default GifSearch
