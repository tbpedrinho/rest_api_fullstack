
import React, {useEffect, useState} from "react";

import * as newsServices from "./NewsServices";

import { News } from "./News";
import NewsItem from  './NewsItems';

const NewsList = () => {

const [news, setNews] = useState<News[]>([])

    const loadNews =  async() =>{
        const res = await newsServices.getNews()
        
        const formatedNews = res.data.map((news) => {
            return {
                ...news,
                createdAt: news.createdAt ? new Date(news.createdAt): new Date(),
                updatedAt: news.updatedAt ? new Date(news.updatedAt): new Date(),
            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        setNews(formatedNews);
}
    useEffect(() => {
        loadNews()
    }, [])
    return (
        <div className= "row">
            {news.map((news) => {
              return <NewsItem news={news} loadNews={loadNews}/>
            })}
        </div>
    )
}

export default NewsList