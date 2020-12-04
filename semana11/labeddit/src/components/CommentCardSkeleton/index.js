/*Material UI*/
import Skeleton from '@material-ui/lab/Skeleton';

/*Icones*/
import { ImArrowUp, ImArrowDown } from 'react-icons/im';

/*Tags styleds*/
import { 
  CommentContainer,
  ContantContainer,
  CommentInfoContainer, 
  CommentTextContainer, 
  CommentText 
} from './styles';

import {
  VotesContainer,
  ArrowContainer,
} from '../styles/commonStyles';

export default function CommentCardSkeleton() {

  return (
    <CommentContainer>

      <VotesContainer>
        <ArrowContainer>
          <ImArrowUp size={'15'} color={'#878A8C'} />
        </ArrowContainer>

        <ArrowContainer>
          <ImArrowDown size={'15'} color={'#878A8C'} />
        </ArrowContainer>       
      </VotesContainer>

      <ContantContainer>

        <CommentInfoContainer>
          <Skeleton variant="circle" width={20} height={20} />
          <Skeleton variant="text" width={'80%'}/>
        </CommentInfoContainer>

        <CommentTextContainer>
            <CommentText><Skeleton variant="text" /></CommentText>
        </CommentTextContainer>

      </ContantContainer>
    </CommentContainer>
  );
}