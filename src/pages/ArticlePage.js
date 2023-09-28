import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentList from "../components/CommentList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
  const { articleId } = useParams();

  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    canUpvote: false,
  });

  const { canUpvote } = articleInfo;

  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authToken: token } : {};

      const response = await axios.get(`/api/articles/${articleId}`, {
        headers,
      });

      const articleInfoNew = response.data;
      setArticleInfo(articleInfoNew);
    };

    if (!isLoading) {
      loadArticleInfo();
    }
  }, [isLoading, user]);

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authToken: token } : {};

    const response = await axios.put(
      `/api/articles/${articleId}/upvote`,
      null,
      { headers }
    );
    const articleInfoNew = await response.data;
    setArticleInfo(articleInfoNew);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        {user ? (
          <button onClick={addUpvote}>
            {canUpvote ? "Upvote" : "Already Upvoted"}
          </button>
        ) : (
          <button>Login to add Upvote</button>
        )}
        {articleInfo && (
          <p>This post has been upvoted {articleInfo.upvotes} times</p>
        )}
      </div>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

      {user ? (
        <AddCommentForm
          articleName={articleId}
          onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
      ) : (
        <button>Login to add Comments</button>
      )}
      {articleInfo && <CommentList comments={articleInfo.comments} />}
    </>
  );
};

export default ArticlePage;
