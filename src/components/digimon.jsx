import React, { Component } from 'react';
import axios from 'axios';
import { Typography, Card, withStyles, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

const useStyles = theme => ({
    root: {
      backgroundColor: 'silver',
      height: 500,
      width: 350,
    },

    digiPhoto: {
        height: 350
    }

})  


class Digimon extends Component {
    state = {
        digimon : null  
    }

    getDigimon = async () => await axios.get('https://digimon-api.vercel.app/api/digimon')
    
    componentDidMount() {
        this.getDigimon().then(digimon => this.setState({digimon: digimon.data}))
    }

    render() { 
        console.log(this.state.digimon)
        const { classes } = this.props;

        return (
            <React.Fragment>
                {this.state.digimon !== null && 
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.digiPhoto} image={this.state.digimon[1].img}/> 
                            <CardContent> 
                                <Typography variant='h3'>{this.state.digimon[1].name}</Typography>
                                <Typography>{this.state.digimon[1].level}</Typography>
                            </CardContent>  
                        </CardActionArea>

                    </Card>
                }
            </React.Fragment>
            );
    }
}
 
export default withStyles(useStyles)(Digimon);