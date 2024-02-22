import axios from 'axios';

const API_URL = 'http://localhost:3000/api/user';

export const getAllUser = () => {
    return axios.get(`${API_URL}`);
};

export const getUserById = (usrId: Number) => {
    return axios.get(`${API_URL}/${usrId}`);
};

export const addUser = (userName: string, prenom: string, nom: string, mail: string) => {
    const userData = {
        username: userName,
        prenom: prenom,
        nom: nom,
        mail: mail,
    };

    return axios.post(`${API_URL}/add-user`, userData);
};

export const modifUser = (id: Number, userName: string, prenom: string, nom: string, mail: string) => {
    const userData = {
        username: userName,
        prenom: prenom,
        nom: nom,
        mail: mail,
    };

    return axios.put(`${API_URL}/update/${id}`, userData);
};

export const deleteUser = (id: number) => {
    return axios.delete(`${API_URL}/delete/${id}`);
};