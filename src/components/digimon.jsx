import React, { Component } from 'react';
import axios from 'axios';

class Digimon extends Component {
    state = {
        digimon : null  
    }

    getDigimon = async () => await axios.get('https://digimon-api.vercel.app/api/digimon')
    
    componentDidMount() {
        this.getDigimon().then(digimon => this.setState({digimon: digimon.data}))
    }

    render() { 
        return (
            <p>
                {this.state.digimon !== null && this.state.digimon[0].name}
            </p>
            );
    }
}
 
export default Digimon;