import React, { Component } from 'react';
import ApiService from "../../ApiService";
import './userEdit.css'

class userEdit extends Component {

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
    componentDidMount() {
        this.loadUser();
    }
    // list
    loadUser = () => {
        ApiService.fetchUserByID(window.localStorage.getItem("userID"))
            .then(res => {
                let user = res.data;
                this.setState({
                    id: user.id,
                    phone: user.phone,
                    address: user.address,
                    email: user.email,
                    role: user.role
                })
            })
            .catch(err => {
                console.log('loadUser() error', err);
            });
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    //edit save
    saveUser = (e) => {
        e.preventDefault();

        let user = {
            id: this.state.id,
            phone: this.state.phone,
            address: this.state.address,
            email: this.state.email,
            role: this.state.role
        }

        ApiService.editUser(user)
            .then(res => {
                this.setState({
                    message: user.id + 'successfully edit!!'
                })
                this.props.history.push('/users');
                alert("변경 되었습니다!");
            })
            .catch(err => {
                console.log('saveUser() error', err);
            })
    }
    render() {
        return (
            <div>
                <p className="logo__middle">EDIT USER</p>
                <form className="EditUser">
                    <div className="window">
                        <p className="icon" onClick={this.saveUser}><i className="fas fa-user-check"></i></p>
                    </div>
                    <div className="window">
                        <p>ID:</p>
                        <input type="text" name="id" readOnly={true} value={this.state.id} ></input>
                    </div>
                    <div className="window">
                        <p>PHONE:</p>
                        <input type="text" name="phone" value={this.state.phone} onChange={this.onChange}></input>
                    </div>
                    <div className="window">
                        <p>ADRESS:</p>
                        <input type="text" name="address" value={this.state.address} onChange={this.onChange}></input>
                    </div>
                    <div className="window">
                        <p>EMAIL:</p>
                        <input type="text" name="email" readOnly={true} value={this.state.email} onChange={this.onChange}></input>
                    </div>
                    <div className="window">
                        <p>ROLE:</p>
                        <input type="text" name="role" value={this.state.role} onChange={this.onChange}></input>
                    </div>
                </form>

            </div>
        );
    }
}

export default userEdit;