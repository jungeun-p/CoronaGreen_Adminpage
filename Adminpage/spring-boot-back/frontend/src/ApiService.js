import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8081";

class ApiService {
    //user list
    fetchUsers() {
        return axios.get(USER_API_BASE_URL + '/users');
    }
    //qna
    fetchQnas() {
        return axios.get(USER_API_BASE_URL + '/qnas');
    }
    fetchQnaByNO(boardNO) {
        return axios.get(USER_API_BASE_URL + '/qnas/' + boardNO);
    }
    editQna(qna) {
        return axios.put(USER_API_BASE_URL + '/qnas/' + qna.boardno, qna)
    }

    //dona
    fetchDonas() {
        return axios.get(USER_API_BASE_URL + '/donas');
    }

    //userlist
    fetchUserByID(userID) {
        return axios.get(USER_API_BASE_URL + '/users/' + userID);
    }
    deleteUser(userID) {
        return axios.delete(USER_API_BASE_URL + '/users/' + userID);
    }
    addUser(user) {
        return axios.post(USER_API_BASE_URL + '/users', user);
    }
    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/users/' + user.id, user)
    }
}

export default new ApiService();