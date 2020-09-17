import { Component } from 'react';
import axios from 'axios';

class Anime extends Component {
    state = {  
        data: null
    }

    componentDidMount() {
        this.getData().then(data => this.setState({data}))
    }

    getData = async () => await axios.get('https://api.jikan.moe/v3/anime/1/', {headers: {'Access-Control-Allow-Credentials':true}}) //Async function

    render() { 
        console.log(this.state.data)

        return ('anime');
    }
}
 
export default Anime;