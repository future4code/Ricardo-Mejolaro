import React, { useState } from 'react'

/*Serviços*/
import { votePost } from '../../services/posts';

/*Imagens*/
import IconImg from '../../assets/img/icon-img.png';

/*Icones*/
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { FaCommentAlt, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { RiShareForwardFill } from 'react-icons/ri';

/*Tags styleds*/
import {
  ContantContainer,
  CommentsCount,
  CommentingContainer,
  ShareContainer,
  SocialsContainer,
  SocialContainer,
  Link
} from './styles';

import {
  PostContainer,
  VotesContainer,
  ArrowContainer,
  VotesCount,
  PostInfoContainer,
  Img,
  PostTitle,
  AuthorPosting,
  CommentsContainer,
  PostTextContainer,
  PostText,
  PostActionsContainer,
  ActionsText,
} from '../styles/commonStyles';

export default function PostCardDetails(props) {
  const {
    userVoteDirection,
    id,
    username,
    votesCount,
    title,
    commentsCount,
    text,
    updated,
    setCommenting,
    commenting
  } = props

  const [sharing, setSharing] = useState(false);

  /*Função de voto*/
  const hadleVote = (id, userVote, vote) => {
    let direction = vote;
    if ((userVote === 1 && direction === 1) || (userVote === -1 && direction === -1)) {
      direction = 0
    } else {
      direction = vote
    }

    const body = {
      direction: direction
    }

    votePost(body, id, updated)
  }

  /*Função de abre ou fecha componente de comentário*/
  const handleComments = () => {
    setCommenting(!commenting)
  }

  /*Função de abre ou fecha componente de compartilhamento*/
  const openSearchOptions = () => {
    setSharing(!sharing)
  }
  return (
    <PostContainer>

      <VotesContainer>
        <ArrowContainer onClick={() => hadleVote(id, userVoteDirection, 1)}>
          <ImArrowUp size={'15'} color={userVoteDirection === 1 ? '#FF4500' : '#878A8C'} />
        </ArrowContainer>

        <VotesCount>{votesCount}</VotesCount>

        <ArrowContainer onClick={() => hadleVote(id, userVoteDirection, -1)}>
          <ImArrowDown size={'15'} color={userVoteDirection === -1 ? '#0079D3' : '#878A8C'} />
        </ArrowContainer>
      </VotesContainer>

      <ContantContainer>

        <PostInfoContainer>
          <Img src={IconImg} />
          <PostTitle>l/{title}</PostTitle>
          <AuthorPosting>- Posted by u/{username}</AuthorPosting>
        </PostInfoContainer>

        <PostTextContainer>
          <PostText>{text}</PostText>
        </PostTextContainer>

        <PostActionsContainer>
          <CommentsContainer>
            <FaCommentAlt size={'14'} color={'#878A8C'} />
            <CommentsCount>{commentsCount}</CommentsCount>
            <ActionsText>Comments</ActionsText>
          </CommentsContainer>

          <CommentingContainer onClick={handleComments}>
            <FaCommentAlt size={'14'} color={'#878A8C'} />
            <ActionsText>Create a Comment</ActionsText>
          </CommentingContainer>

          <ShareContainer onClick={openSearchOptions}>
            <RiShareForwardFill size={'16'} color={'#878A8C'}></RiShareForwardFill>
            <ActionsText>Share</ActionsText>
          </ShareContainer>

          {sharing &&
            <SocialsContainer>
              <SocialContainer
                data-href={`http://ricardo-mejolaro-labeddit/post/${id}`}
                data-layout="button_count"
                data-size="small"
              >
                <Link
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Fpost%2F29MbTIwKRi1cwiaN83WT&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                >
                  <FaFacebookSquare size={'20'} color={'#878A8C'}></FaFacebookSquare>
                </Link>
              </SocialContainer>
              <SocialContainer>
                <Link 
                  target="_blank"
                  href={`https://twitter.com/share?ref_src=http://ricardo-mejolaro-labeddit/post/${id}`} 
                  data-show-count="false"
                >
                  <FaTwitter size={'20'} color={'#878A8C'}></FaTwitter>
                </Link>             
              </SocialContainer>
            </SocialsContainer>
          }
        </PostActionsContainer>

      </ContantContainer>
    </PostContainer>
  );
}