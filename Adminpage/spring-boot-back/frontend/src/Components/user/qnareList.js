import React, { Component } from 'react';
import ApiService from "../../ApiService";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        height: '345px',
        overflowY: 'auto',
        marginTop: theme.spacing.unit * 1
    },
    table: {
        minWidth: 500
    }
})

class QnareList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qnas: [{
                boardno: 1,
                content: '1',
                regdate: '1'
            }],
            message: null
        }
    }
    componentDidMount() {
        this.reloadQnaList();

    }
    //qna list
    reloadQnaList = () => {
        ApiService.fetchQnas()
            .then(res => {
                this.setState({
                    qnas: res.data
                })
            })
            .catch(err => {
                console.log('reloadQnalList() Error!', err);
            })
    }
    editQna = (NO) => {
        window.localStorage.setItem("boardNO", NO);
        this.props.history.push('/edit-qna');
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <p className="logo__middle">QNA REPLY LIST</p>
                <Paper className={classes.root}>
                    <Table style={style} className={classes.root} >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">NO</TableCell>
                                <TableCell align="center">CONTENT</TableCell>
                                <TableCell align="center">UPDATE</TableCell>
                                <TableCell align="center">DATE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.qnas.map(qna =>
                                <TableRow key={qna.boardno}>
                                    <TableCell component="th" scope="qna" align="center">{qna.boardno}</TableCell>
                                    <TableCell align="center">{qna.content}</TableCell>
                                    <TableCell align="center" onClick={() => this.editQna(qna.boardno)}>
                                        <div className="edit"><i className="fas fa-pencil-alt"></i></div>
                                    </TableCell>
                                    <TableCell align="center">{qna.regdate.substring(0, 10)}</TableCell>
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

export default withStyles(styles)(QnareList);