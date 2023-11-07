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

export const getUser = async (id: string) => {
    const resp = await api.get(`/users/${id}`)
    return resp.data.data;
};

export const updateUser = async (id: string, user: User) => {
    const resp = await api.patch(`/users/${id}`, user)
    return resp.data.data;
};

export const createUser = async (user: User) => {
    const resp = await api.post('/users', user)
    return resp.data.data;
};

export const deleteUser = async (id: string) => {
    const resp = await api.delete(`/users/${id}`)
    return resp.data.data;
};