import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component{
  constructor (){
    super()

    this.state = {
      gifs: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(value){
    let that = this
    fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC`)
    .then(function(resp){return resp.json()})
    .then(function(json){
      that.setState({
        gifs: json.data.slice(0,3)
      })
    })
  }

  render(){
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer
