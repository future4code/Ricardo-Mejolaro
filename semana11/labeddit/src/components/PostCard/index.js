import { useHistory } from 'react-router-dom';

/*Serviços*/
import { votePost } from '../../services/posts';

/*Coodenador de rotas*/
import { goToPostDetails } from '../../routes/coordinator';

/*Imagens*/
import IconImg from '../../assets/img/icon-img.png';

/*Icones*/
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { FaCommentAlt } from 'react-icons/fa';

/*Tags styleds*/
import { ContantContainer } from './styles';

import {
  PostContainer,
  VotesContainer,
  ArrowContainer,
  VotesCount,
  PostInfoContainer,
  Img,
  PostTitle,
  AuthorPosting,
  PostTextContainer,
  PostText,
  PostActionsContainer,
  CommentsContainer,
  CommentsCount,
  ActionsText,
} from '../styles/commonStyles';

export default function PostCard(props) {
  const {
    userVoteDirection,
    id,
    username,
    votesCount,
    title,
    commentsCount,
    text,
    updated
  } = props

  const history = useHistory()

  const hadleVote = (id, userVote, vote) => {
    if (id !== 'Post not found') {
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
  }

  const handlePostDetails = () => {
    if (id !== 'Post not found') {
      goToPostDetails(history, id)
    }
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

      <ContantContainer onClick={handlePostDetails}>

        <PostInfoContainer>
          <Img src={IconImg} />
          <PostTitle>l/{title}</PostTitle>
          <AuthorPosting>- Posted by u/{username.toLowerCase()}</AuthorPosting>
        </PostInfoContainer>

        <PostTextContainer>
          <PostText>{text.substr(0, 150)}{text.length > 150 ? '...' : ''}</PostText>
        </PostTextContainer>

        <PostActionsContainer>
          <CommentsContainer>
            <FaCommentAlt size={'14'} color={'#878A8C'} />
            <CommentsCount>{commentsCount}</CommentsCount>
            <ActionsText>Comments</ActionsText>
          </CommentsContainer>
        </PostActionsContainer>

      </ContantContainer>

    </PostContainer>
  );
}