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
import PostCardSkeleton from '../../components/PostCardSkeleton';

/*Tags styleds*/
import { CreatePostContainer } from './styles';

import {
  FeedContainer,
  Title,
  FieldContainer,
  Img,
  ButtonContainer,
  TitlesDetailsPage
} from '../styles/commonStyles';

export default function FeedPage() {
  useProtectedPage()
  const { states, setters, requests } = useContext(GlobalStateContext)

  /*Requisição de posts*/
  useEffect(() => {
    requests.getAllPosts()
  }, [states, setters, requests]);

  const posts = states.allPosts || []

  /*Criação de post*/
  const { form, onChange, resetForm } = useForm({ text: "", title: "" })

  const handlePost = (event) => {
    event.preventDefault()
    createPost(form, requests)
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
      {posts.length === 0 ? (
        <div>
          <TitlesDetailsPage>Posts</TitlesDetailsPage>
          <PostCardSkeleton />
        </div>
      ) : (
          <div>
            <TitlesDetailsPage>{
              states.filteredPosts.length > 0 ? 
              `Search results: ${states.filteredPosts[0].text === 'Post not Found' ? 
              '0' : 
              states.filteredPosts.length}` : 
              'Posts'}
            </TitlesDetailsPage>
            
            {states.filteredPosts.length > 0 ? (
              states.filteredPosts.map(post => {
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
              })
            ) : (
                posts.map(post => {
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
                })
              )
            }
          </div>
        )
      }
    </FeedContainer>
  );
}