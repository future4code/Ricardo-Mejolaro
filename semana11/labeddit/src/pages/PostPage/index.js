import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';
import { useForm } from "../../hooks/useForm";

/*Serviços*/
import { createComment } from '../../services/posts';
import api from '../../services/api';

/*Imagens*/
import IconImg from '../../assets/img/icon-img.png';

/*Itens Material UI*/
import { TextField, Button } from '@material-ui/core';

/*Components*/
import PostDetailsCard from '../../components/PostDetailsCard';
import CommentCard from '../../components/CommentCard';
import PostCardSkeleton from '../../components/PostCardSkeleton';
import CommentCardSkeleton from '../../components/CommentCardSkeleton';

/*Tags styleds*/
import { FeedDetailsContainer, CreateCommentContainer } from './styles';

import {
  Title,
  FieldContainer,
  Img,
  ButtonContainer,
  TitlesDetailsPage
} from '../styles/commonStyles';

export default function PostsPage() {
  useProtectedPage()
  document.title = 'LabEddit - Post'
  
  const params = useParams()
  const id = params.id
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [commenting, setCommenting] = useState(false)

  /*Requisição de posts*/
  useEffect(() => {
    window.scrollTo(0,0);
    getPostDetails(id)
  }, [id]);

  const getPostDetails = (id) => {
    api.get(`/posts/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      setPost(res.data.post)
      setComments(res.data.post.comments)
    }).catch(error => {
      console.log(error.message)
    })
  }

  const functionGetProps = {
    updatedDetails: getPostDetails
  }

  /*Criação de post*/
  const { form, onChange, resetForm } = useForm({ text: "" })

  const handleComment = (event) => {
    event.preventDefault()
    createComment(form, post.id, functionGetProps)
    resetForm()
    setCommenting(false)
  }

  return (
    <FeedDetailsContainer>
      <TitlesDetailsPage>Post</TitlesDetailsPage>
      {Object.entries(post).length === 0 ? (
        <PostCardSkeleton />
      ) : (
          <div>
            <PostDetailsCard
              key={post.id}
              id={post.id}
              username={post.username}
              votesCount={post.votesCount}
              title={post.title}
              commentsCount={post.commentsCount}
              text={post.text}
              userVoteDirection={post.userVoteDirection}
              updated={functionGetProps}
              setCommenting={setCommenting}
              commenting={commenting}
            />
          </div>
        )

      }
      {commenting &&
        <CreateCommentContainer onSubmit={handleComment}>
          <Title>Create a Comment</Title>
          <FieldContainer>
            <Img src={IconImg} />
            <TextField
              label="Comment"
              variant="outlined"
              type="text"
              name="text"
              value={form.text}
              onChange={onChange}
              required
            />
          </FieldContainer>
          <ButtonContainer onClick={() => getPostDetails(id)}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size='large'
            >
              Comment
            </Button>
          </ButtonContainer>
        </CreateCommentContainer>
      }
      {Object.entries(post).length === 0 && comments.length === 0 ? (
        <div>
          <TitlesDetailsPage>Comments</TitlesDetailsPage>
          <CommentCardSkeleton />
          <CommentCardSkeleton />
        </div>

      ) : Object.entries(post).length > 0 && comments.length > 0 ? (
        <div>
          <TitlesDetailsPage>Comments</TitlesDetailsPage>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.id}
                commentId={comment.id}
                postId={post.id}
                username={comment.username}
                votesCount={comment.votesCount}
                commentsCount={comment.commentsCount}
                text={comment.text}
                userVoteDirection={comment.userVoteDirection}
                updated={functionGetProps}
              />
            )
          })}
        </div>

      ) : (
            <div></div>
          )

      }
    </FeedDetailsContainer>
  );
}