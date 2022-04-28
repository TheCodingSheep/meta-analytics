import axios from 'axios';
const getHeaders = () => {
    const accessToken = localStorage.getItem('accessToken')
    return { headers: { "authorization": `Bearer ${accessToken}`, Accept: 'application/json' } };

}

export const UserAuthService = {
    login: (data) => {
        console.log('servicedata', data);
        return axios.post('/api/auth/signIn',data);
    },
    registerUser: (data) => {
        return axios.post('/api/auth/registerUser',data );
    },
    // roleList: () => {
    //     return axios.get('/api/auth/role', getHeaders());
    // },
    // changePassword: (data) => {
    //     return axios.post('/api/auth/changePassword',data, getHeaders());
    // },
    // forgetPassword: (data) => {
    //     return axios.post('/api/auth/forgetPassword',data, getHeaders());
    // },
    // resetPassword: (data) => {
    //     return axios.post('/api/auth/resetPassword',data, getHeaders());
    // },
    // verifyToken: (data) => {
    //     return axios.post('/api/auth/verifyToken',data, getHeaders());
    // }
}