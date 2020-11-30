import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import userList from './userList';
import userAdd from './userAdd';
import userEdit from './userEdit';
import qnaEdit from './qnaEdit';

const RouterComponent = () => {
    return (
        <div style={style}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={userList} />
                        <Route path="/users" component={userList} />
                        <Route path="/add-user" component={userAdd} />
                        <Route path="/edit-user" component={userEdit} />
                        <Route path="/edit-qna" component={qnaEdit} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

const style = {
    marginTop: '20px'
}

export default RouterComponent;