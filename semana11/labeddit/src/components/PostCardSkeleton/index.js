/*Material UI*/
import Skeleton from '@material-ui/lab/Skeleton';

/*Icones*/
import { ImArrowUp, ImArrowDown } from 'react-icons/im';

/*Tags styleds*/
import { ContantContainer } from './styles';

import {
  PostContainer,
  VotesContainer,
  ArrowContainer,
  VotesCount,
  PostInfoContainer,
  PostTextContainer,
  PostText,
  PostActionsContainer,
} from '../styles/commonStyles';

export default function PostCardSkeleton() {

  return (
    <PostContainer>

      <VotesContainer>
        <ArrowContainer>
          <ImArrowUp size={'15'} color={'#878A8C'} />
        </ArrowContainer>

        <VotesCount>
          <Skeleton variant="text" width={15}/>
        </VotesCount>

        <ArrowContainer>
          <ImArrowDown size={'15'} color={'#878A8C'} />
        </ArrowContainer>
      </VotesContainer>

      <ContantContainer>

        <PostInfoContainer>
          <Skeleton variant="circle" width={20} height={20} />
          <Skeleton variant="text" width={'80%'}/>
        </PostInfoContainer>

        <PostTextContainer>
          <PostText><Skeleton variant="text" /></PostText>
        </PostTextContainer>

        <PostActionsContainer>
            <Skeleton variant="text" width={'50%'}/>
        </PostActionsContainer>

      </ContantContainer>
    </PostContainer>
  );
}