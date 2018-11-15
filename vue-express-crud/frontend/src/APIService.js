import axios from 'axios';

const API_URL = 'http://localhost:4000';

export class APIService {
    constructor() {
    }

    getTodos() {
        const url = `${API_URL}/todos/`;
        return axios.get(url).then((res) => res.data);
    }

    getTodo(pk) {
        const url = `${API_URL}/todos/${pk}`;
        return axios.get(url).then(res => res.data);
    }

    deleteTodo(todo){
        const url = `${API_URL}/todos/${todo.pk}`;
        return axios.delete(url)
    }

    createTodo(todo){
        const url = `${API_URL}/create/`;
        return axios.post(url,todo);
    }

    updateTodo(todo){
        const url = `${API_URL}/todos/${todo.pk}`;
        return axios.put(url,todo);
    }
}
