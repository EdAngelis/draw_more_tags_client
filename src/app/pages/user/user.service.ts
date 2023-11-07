import api from '@/api';
import User from '@/models/user';

export const signIn = async (user: User) => {
    const resp = await api.post('/users/signIn', user)
    return resp.data;
};

export const getUsers = async () => {
    const resp = await api.get('/users')
    return resp.data.data;
};