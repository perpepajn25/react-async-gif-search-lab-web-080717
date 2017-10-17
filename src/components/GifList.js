import React from 'react'

class GifList extends React.Component {

  render(){
    const gifs = this.props.gifs.map(function(gif){
      return <li><img src={gif.images.downsized_large.url} /></li>
    })
    return(
      <ul> {gifs} </ul>
    )
  }

}

export default GifList
