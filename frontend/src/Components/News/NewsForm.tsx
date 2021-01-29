import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import { News } from "./News";
import * as newsServices from "./NewsServices";

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const NewsForm = () => {
  const history = useHistory();
  const params = useParams<Params>();

  const initialState = {
    title: "",
    content: "",
    news_id: 0,
  };
  const [news, setNews] = useState<News>(initialState);

  const handleInputChange = (e: inputChange) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id){  
    await newsServices.createNews(news);
    toast.success("Notícia adiciona com sucesso");
    } else {
      await newsServices.updateNews(params.id, news)
    }

    history.push("/");
  };

  const getNewsById = async (id: string) => {
   const res =  await newsServices.getNewsById(id);
   const { title, content, news_id} = res.data;
   setNews({title, content, news_id});
  };

  useEffect(() => {
    if (params.id) getNewsById(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Cadastro de Notícia</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                  type="number"
                  name="news_id"
                  placeholder="Escreva o código da notícia"
                  className="form-control"
                  onChange={handleInputChange}
                  value={news.news_id}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Descreva o Título da notícia"
                  className="form-control"
                  onChange={handleInputChange}
                  value = {news.title}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="content"
                  rows={3}
                  className="form-control"
                  placeholder="Digite o conteúdo da notícia"
                  onChange={handleInputChange}
                  value = {news.content}
                />
              </div>
              {params.id ? (
                <button className="btn btn-info">Update Video</button>
              ) : (
                <button className="btn btn-primary">Salvar</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
