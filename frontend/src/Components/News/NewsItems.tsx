import React from "react";
import { News } from "./News";

import * as newsService from './NewsServices';

import { useHistory } from "react-router-dom";

import "./NewsItem.css";

interface Props {
  news: News;
  loadNews: () => void;
}



const NewsItem = ({ news, loadNews}: Props) => {
  const history = useHistory();

  const handlerDelete = async (id: string) => {
    await newsService.deleteNews(id)
    loadNews();
    }


  return (
    <div className="col-md-4">
      <div
        className="card card-body news-card"
        style={{ cursor: "pointer" }}
        
      >
        <div className="d-flex justify-content-between">
          <h1
          onClick={() => history.push(`/update/${news._id}`)}
          >{news.title}</h1>
          <span className="text-danger" onClick = {() => news._id && handlerDelete(news._id) }>X</span>
        </div>
        <p>{news.content}</p>
      </div>
    </div>
  );
};
export default NewsItem;
