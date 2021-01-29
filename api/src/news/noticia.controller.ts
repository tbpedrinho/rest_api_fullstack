import { RequestHandler } from "express";
import News from './Noticia';

export const createNews : RequestHandler = async (req,res) => {

    const newsFound = await News.findOne({news_id: req.body.news_id })

    if (newsFound)
    return res.status(301).json({message: 'This id already exists'})
    const news = new News(req.body)
    const savedNews = await news.save()
    res.json(savedNews)
}

export const getNews: RequestHandler = async (req,res) => {
try {
    const news = await News.find()
    return res.json(news);
} catch (error) {
    res.json(error)   
}
}
export const getNewsById: RequestHandler = async (req,res) => {
    const newsFoundById = await News.findById(req.params.id);
    if (!newsFoundById) return res.status(204).json();
    return res.json(newsFoundById)
}
export const deleteNews : RequestHandler = async (req,res) => {
    const newsFoundById = await News.findByIdAndDelete(req.params.id);
    if (!newsFoundById) return res.status(204).json();
    return res.json(newsFoundById)
}

export const updateNews : RequestHandler = async (req,res) => {
    const newsUpdated = await News.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(newsUpdated)
}