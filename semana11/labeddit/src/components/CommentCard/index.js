/*Serviços*/
import { voteComment } from '../../services/posts';

/*Imagens*/
import IconImg from '../../assets/img/icon-img.png';

/*Icones*/
import { ImArrowUp, ImArrowDown } from 'react-icons/im';

/*Tags styleds*/
import { 
  CommentContainer,
  ContantContainer,
  CommentInfoContainer,
  PointsPosting, 
  CommentTextContainer, 
  CommentText 
} from './styles';

import {
  VotesContainer,
  ArrowContainer,
  Img,
  AuthorPosting,
} from '../styles/commonStyles';

export default function CommentCard(props) {
  const {
    userVoteDirection, 
    commentId,
    postId,
    username, 
    votesCount,
    text, 
    updated
  } = props

  const hadlePostVote = (postId, commentId, userVote, vote) => {
    let direction = vote;
    if ((userVote === 1 && direction === 1) || (userVote === -1 && direction === -1)) {
      direction = 0
    } else {
      direction = vote
    }

    const body = {
      direction: direction
    }

    voteComment(body, postId, commentId, updated)    
  }

  return (
    <CommentContainer>

      <VotesContainer>
        <ArrowContainer onClick={() => hadlePostVote(postId, commentId, userVoteDirection, 1)}>
          <ImArrowUp size={'15'} color={userVoteDirection === 1 ? '#FF4500' : '#878A8C'} />
        </ArrowContainer>

        <ArrowContainer onClick={() => hadlePostVote(postId, commentId, userVoteDirection, -1)}>
          <ImArrowDown size={'15'} color={userVoteDirection === -1 ? '#0079D3' : '#878A8C'} />
        </ArrowContainer>       
      </VotesContainer>

      <ContantContainer>

        <CommentInfoContainer>
          <Img src={IconImg} />
          <AuthorPosting>- Commented by u/{username.toLowerCase()}</AuthorPosting>
          <PointsPosting> {votesCount} points</PointsPosting>
        </CommentInfoContainer>

        <CommentTextContainer>
            <CommentText>{text.substr(0, 150)}{text.length > 150 ? '...' : ''}</CommentText>
        </CommentTextContainer>

      </ContantContainer>
    </CommentContainer>
  );
}