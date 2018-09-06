import React, { Component } from 'react';
import '../Styles/Header.css'

class Header extends Component {

    state = {
        inputValue: ""
    }

    handleChange = (e) => {
        this.setState ({
            inputValue: e.target.value
        })
        // sends path to parent
        // this.props.getPath(this.state.inputValue)
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log("from header",this.state.inputValue)
        this.props.fetchData(this.state.inputValue)
    }

    render () {
        return (
            <header className='header'>
                <form className="search-form">
                    <div>
                        <input type="text" autoComplete='on' placeholder="Search" autoComplete="on" className="search-form__input" onChange={this.handleChange}/>
                        <input className="ok-btn" type="submit" value="OK" onClick={this.handleClick}/>
                    </div>
                </form>
            </header>
        )
    }
};

export default Header;