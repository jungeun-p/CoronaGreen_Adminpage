import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import qnaEdit from './qnaEdit';
import qnaList from './qnareList'

const RouterComponent_qna = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={qnaList} />
                    <Route path="/edit-qna" component={qnaEdit} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default RouterComponent_qna;