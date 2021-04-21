import React, { Component } from 'react'

export default class WeatherDataComponent extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.temp===this.props.temp && nextProps.city===this.props.city){
            return false
        }
        return true
    }
    render() {
        console.log("render from weatherComponent");
        return (
            <div>
                <p>Feels like .......{this.props.feelsLike}</p>
                <p>City: {this.props.city}</p>
                <img src={`http://openweathermap.org/img/wn/${this.props.icon}@4x.png`} alt=""/>
                <div>
                   <h1>Temperature:{this.props.temp}</h1>
                </div>
                <div>
                    <p>Humidity:{this.props.humidity}</p>
                    <p>Pressure:{this.props.pressure}</p>
                    <p>Max.Temp:{this.props.maxTemp}</p>
                    <p>Min.Temp:{this.props.minTemp}</p>
                </div>
            </div>
        )
    }
}
