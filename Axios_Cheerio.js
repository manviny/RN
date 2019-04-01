import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import cheerio from 'cheerio-without-node-native';


export default class Encuentro extends React.Component  {

  state = { albums: [] };

  componentWillMount() {
    axios.get('https://www.combinacionganadora.com/quiniela/2018-2019/jornada-47/')
    .then( response => {
      const $ = cheerio.load(response.data);
      const items = $('table.matchTable tr').toArray()
      .map(item => {
        const $item = $(item);
        return{
          title : $item.find("td:nth-child(2)").text()
        }
      });
      this.setState({ albums: items }) 
    })
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    return(
       <View>
        {this.renderAlbums()}
       </View>
    );
  }
}
