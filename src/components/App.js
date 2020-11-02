import React, {Component} from 'react';
import CardsList from './CardsList';
import axios from 'axios';
import PlanetDetail from "./PlanetDetails";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    state ={
        planets:[],
        selectedPlanet:'',
    };

    componentDidMount() {
        this.onLoad();
    }
    onLoad = async () => {
        const response1 = await axios.get('https://swapi.dev/api/planets', {});
        const response2 = await axios.get('https://swapi.dev/api/planets/?page=2', {});
        const response3 = await axios.get('https://swapi.dev/api/planets/?page=3', {});
        const response4 = await axios.get('https://swapi.dev/api/planets/?page=4', {});
        const response5 = await axios.get('https://swapi.dev/api/planets/?page=5', {});
        const response6 = await axios.get('https://swapi.dev/api/planets/?page=6', {});
        this.setState({
            planets: [...response1.data.results,...response2.data.results,...response3.data.results,...response4.data.results,...response5.data.results,...response6.data.results],
        })
    };
    onPlanetSelect = planet => {
        this.setState({selectedPlanet:planet})
    };
    home=()=>{
        return(
            <div><CardsList cards={this.state.planets} onPlanetSelect={this.onPlanetSelect}/></div>
        );
    };
    planet=()=>{
        return(
            <div><PlanetDetail card={this.state.selectedPlanet}/> </div>
        );
    }

    render() {
        return (
            <div onLoad={this.onLoad}>
                <BrowserRouter>
                    <div className='ui container' style={{marginTop:"2rem"}}>
                        <Route path="/" exact component={this.home}/>
                        <Route path="/planet" component ={this.planet}/>
                    </div>
                </BrowserRouter>

            </div>

        );
    }

};

export default App;