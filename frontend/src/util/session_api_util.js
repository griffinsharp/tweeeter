import axios from 'axios';
// axios allows us to set a common header for requets. we only have to do this once upon login
// or when the user refreshes the page and checks to make sure the token hasn't expired

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('api/users/login', userData);
}