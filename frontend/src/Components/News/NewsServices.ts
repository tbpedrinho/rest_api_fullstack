import axios from "axios";
import { News } from "./News";

const API = 'http://localhost:3000'

export const getNews = async () => {
    return await  axios.get<News[]>(`${API}/news`)    
}

export const createNews = async (news: News) => {
    return await axios.post(`${API}/news`, news)    
}

export const getNewsById = async (id:string) => {
    return await  axios.get<News>(`${API}/news/${id}`)    
}
export const updateNews = async (id:string, news: News) => {
    return await  axios.put<News>(`${API}/news/${id}`, news)    
}

export const deleteNews = async (id:string) => {
    return await  axios.delete<News>(`${API}/news/${id}`)    
}