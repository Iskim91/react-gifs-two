import React, { Component } from 'react';

import giphy from "giphy-api";
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'jUwpNzg9IcyrK'
    };
  }

  search = (query) => {
    giphy('h6pwgrQrVxnhd4c5yPUqysuoz7KaD8E6').search({
      q: query,
      rating: 'g',
      limit: 15
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
    console.log(id);
    console.log(this.state.selectedGifId);
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}  gifs={this.state.gifs} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
