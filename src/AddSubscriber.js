import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSusbscriber extends Component {
    
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }


    render() {

        const {name, phone} =this.state;
        return (
            <div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>

                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control">Name: </label><br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone: </label><br/>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}/><br/><br/>

                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added: </span><br/>
                            <span className="subscriber-info">Name: {name}</span><br/>
                            <span className="subscriber-info">Phone: {phone}</span><br/>
                        </div>

                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSusbscriber; 