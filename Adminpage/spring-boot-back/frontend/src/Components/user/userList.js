import React, { Component } from 'react';
import ApiService from "../../ApiService";
import './userList.css';


import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        height: '450px',
        overflowY: 'auto',
        marginTop: theme.spacing.unit * 1
    },
    table: {
        minWidth: 500
    }
})

class userList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                id: '1',
                phone: '1',
                address: '1',
                email: '1',
                role: 'admin'
            }],
            message: null
        }
    }
    componentDidMount() {
        this.reloadUserList();
    }
    // user list
    reloadUserList = () => {
        // DB와 연동해서 리스트
        ApiService.fetchUsers()
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(err => {
                console.log('reloadUserList() Error!', err);
            })
    }
    // user delete
    deleteUser = (userID) => {
        //DB와 연결하여 삭제
        ApiService.deleteUser(userID)
            .then(res => {
                this.setState({
                    message: 'User Deleted Successfully.'
                });
                this.setState({
                    users: this.state.users.filter(user =>
                        user.id !== userID)
                });
            })
            .catch(err => {
                console.log('deleteUser() Error!', err);
            })
    }
    // user edit
    editUser = (ID) => {
        window.localStorage.setItem("userID", ID);
        this.props.history.push('/edit-user');
    }
    // user add
    addUser = () => {
        window.localStorage.removeItem("userID");
        this.props.history.push('/add-user');
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <p className="logo__middle">USER LIST</p>
                <Paper className={classes.root}>
                    <Table style={style} className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">PHONE</TableCell>
                                <TableCell align="center">ADDRESS</TableCell>
                                <TableCell align="center">EMAIL</TableCell>
                                <TableCell align="center">ROLE</TableCell>
                                <TableCell align="center">UPDATE</TableCell>
                                <TableCell align="center">DELETE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.users.map(user =>
                                <TableRow key={user.id}>
                                    <TableCell component="th" scope="user" align="center">{user.id}</TableCell>
                                    <TableCell align="center">{user.phone}</TableCell>
                                    <TableCell align="center">{user.address}</TableCell>
                                    <TableCell align="center">{user.email}</TableCell>
                                    <TableCell align="center">{user.role}</TableCell>
                                    <TableCell align="center" onClick={() => this.editUser(user.id)}>
                                        <div className="edit"><i className="fas fa-pencil-alt"></i></div>
                                    </TableCell>
                                    <TableCell align="center" onClick={() => this.deleteUser(user.id)}>
                                        <div className="delete"><i className="fas fa-trash-alt"></i></div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </div >
        );
    }
}
const style = {
    backgroundColor: 'white',
    borderRadius: '14px',
    marginBottom: '40px',
}

export default withStyles(styles)(userList);