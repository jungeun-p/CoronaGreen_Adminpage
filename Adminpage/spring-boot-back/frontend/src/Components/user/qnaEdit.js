import React, { Component } from 'react';
import ApiService from '../../ApiService';
import './qnaEdit.css';

class qnaEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardno: '',
            content: '',
            regdate: '',
            message: null
        }
    }
    componentDidMount() {
        this.loadQna();
    }

    loadQna = () => {
        ApiService.fetchQnaByNO(window.localStorage.getItem("boardNO"))
            .then(res => {
                let qna = res.data;
                this.setState({
                    boardno: qna.boardno,
                    content: qna.content,
                    regdate: qna.regdate
                })
            })
            .catch(err => {
                console.log('loadQna() error', err);
            });
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveQna = (e) => {
        e.preventDefault();

        let qna = {
            boardno: this.state.boardno,
            content: this.state.content,
            regdate: this.state.regdate
        }

        ApiService.editQna(qna)
            .then(res => {
                this.setState({
                    message: qna.boardno + 'successfully edit!!'
                })
                this.props.history.push('/');
                alert("변경 되었습니다!");
            })
            .catch(err => {
                console.log('saveQna() error', err);
                alert('fail');
            })
    }
    render() {
        return (
            <div>
                <p className="logo__middle">EDIT QNA</p>
                <form className="qnaedit">
                    <div className="window">
                        <p className="icon" onClick={this.saveQna}><i className="fas fa-check"></i></p>
                    </div>
                    <div className="window">
                        <p>NO:</p>
                        <input type="text" name="boardno" readOnly={true} value={this.state.boardno} ></input>
                    </div>
                    <div className="window">
                        <p>CONTENT:</p>
                        <input className="qna__content" type="text" name="content" value={this.state.content} onChange={this.onChange}></input>
                    </div>
                    <div className="window">
                        <p>DATE:</p>
                        <input type="text" name="regdate" value={this.state.regdate} onChange={this.onChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default qnaEdit;