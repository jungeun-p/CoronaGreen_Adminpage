import React, { Component } from 'react';
import ApiService from "../../ApiService";
import './userAdd.css';

class userAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            phone: '',
            address: '',
            email: '',
            role: '',
            message: null
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            id: this.state.id,
            phone: this.state.phone,
            address: this.state.address,
            email: this.state.email,
            role: this.state.role
        }
        // user를 DB에 저장
        ApiService.addUser(user)
            .then(res => {
                this.setState({
                    message: user.username + 'is successfully registered!!!'
                })
                console.log(this.state.message);
                this.props.history.push('/users');
            })
            .catch(err => {
                console.log('saveUser() 에러', err);
            });
    }

    render() {
        return (
            <div>
                <p className="logo">ADD USER</p>
                <form className="useradd">
                    <div className="window">
                        <p class="icon__add" onClick={this.saveUser}><i className="fas fa-user-check"  ></i></p>
                    </div>
                    <div className="window">
                        <p>ID:</p>
                        <input type="text" name="id" value={this.state.id} onChange={this.onChange}></input>
                    </div>
                    <div className="window">
                        <p>PHONE:</p>
                        <input type="text" name="phone" value={this.state.phone} onChange={this.onChange}></input>
                    </div>
                    <div className="window">
                        <p>ADDRESS:</p>
                        <input type="text" name="address" value={this.state.address} onChange={this.onChange}></input>
                    </div>
                    <div className="window">
                        <p>EMAIL:</p>
                        <input type="text" name="email" value={this.state.email} onChange={this.onChange}></input>
                    </div>
                    <div className="window">
                        <p>ROLE:</p>
                        <input type="text" name="role" value={this.state.role} onChange={this.onChange}></input>
                    </div>
                </form>
            </div >
        );
    }
}

export default userAdd;