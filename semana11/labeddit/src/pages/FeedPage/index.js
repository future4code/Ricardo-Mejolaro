import React, { useEffect, useContext } from 'react';

/*Contexts*/
import GlobalStateContext from "../../global/GlobalStateContext";

/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';
import { useForm } from "../../hooks/useForm";

/*Serviços*/
import { createPost } from '../../services/posts';

/*Imagens*/
import IconImg from '../../assets/img/icon-img.png';

/*Itens Material UI*/
import { TextField, Button } from '@material-ui/core';

/*Components*/
import PostCard from '../../components/PostCard';

/*Tags styleds*/
import {
  FeedContainer,
  CreatePostContainer,
  Title,
  FieldContainer,
  Img,
  ButtonContainer
} from './styles';

export default function FeedPage() {
  useProtectedPage()
  const { states, setters, requests } = useContext(GlobalStateContext);

  /*Requisição de posts*/
  useEffect(() => {
    requests.getAllPosts()
  }, [states, setters, requests]);

  const posts = states.allPosts || []

  /*Criação de post*/
  const { form, onChange, resetForm } = useForm({ text: "", title: "" })

  const handlePost = (event) => {
    event.preventDefault()
    createPost(form)
    resetForm()
  }

  return (
    <FeedContainer>
      <CreatePostContainer onSubmit={handlePost}>
        <Title>Create a post</Title>
        <FieldContainer>
          <Img src={IconImg} />
          <TextField
            label="Title Post"
            variant="outlined"
            type="text"
            name="title"
            value={form.title}
            onChange={onChange}
            required
          />
        </FieldContainer>
        <FieldContainer>
          <Img src={IconImg} />
          <TextField
            label="Post"
            variant="outlined"
            type="text"
            name="text"
            value={form.text}
            onChange={onChange}
            required
          />
        </FieldContainer>
        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size='large'
          >
            Post
        </Button>
        </ButtonContainer>
      </CreatePostContainer>
      {posts.length > 0 && posts.map(post => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            username={post.username}
            votesCount={post.votesCount}
            title={post.title}
            commentsCount={post.commentsCount}
            text={post.text}
            userVoteDirection={post.userVoteDirection}
            updated={requests}
          />
        )
      })}

    </FeedContainer>
  );
}