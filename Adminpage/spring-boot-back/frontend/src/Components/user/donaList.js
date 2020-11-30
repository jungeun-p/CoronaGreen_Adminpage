
import React, { Component } from 'react';
import ApiService from '../../ApiService';
import './donaList.css';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        height: '320px',
        overflowY: 'auto',
        marginTop: theme.spacing.unit * 1
    },
    table: {
        minWidth: 500
    }
})

class donaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donas: [
                {
                    id: 'rabbit',
                    donationorder: 1,
                    payment: 2000,
                    regdate: '20/12/12'
                },
                {
                    id: 'bear',
                    donationorder: 2,
                    payment: 4000,
                    regdate: '20/12/13'
                },
                {
                    id: 'cat',
                    donationorder: 3,
                    payment: 9234,
                    regdate: '20/12/13'
                },
                {
                    id: 'dog',
                    donationorder: 3,
                    payment: 5000,
                    regdate: '20/12/14'
                }
            ],
            message: null
        }
    }

    componentDidMount() {
        this.reloadDonaList();
    }

    reloadDonaList = () => {
        ApiService.fetchDonas()
            .then(res => {
                this.setState({
                    donas: res.data
                })
            })
            .catch(err => {
                console.log('reloadDonaList() err', err);
            })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <p className="logo__middle">DONATION LIST</p>
                <Paper className={classes.root}>
                    <Table style={style} className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">ORDER</TableCell>
                                <TableCell align="center">PAYMENT</TableCell>
                                <TableCell align="center">DATE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.donas.map(dona =>
                                <TableRow key={dona.id}>
                                    <TableCell component="th" scope="qna" align="center">{dona.id}</TableCell>
                                    <TableCell align="center">{dona.donationorder}</TableCell>
                                    <TableCell align="center">{dona.payment}</TableCell>
                                    <TableCell align="center">{dona.regdate.substring(0, 10)}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

const style = {
    backgroundColor: 'white',
    borderRadius: '14px'
}


export default withStyles(styles)(donaList);