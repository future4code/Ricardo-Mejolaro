/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';
import { useForm } from "../../hooks/useForm";

/*Serviços*/
import { createPost } from '../../services/posts';

/*Imagens*/
import IconImg from '../../assets/img/icon-img.png';

/*Itens Material UI*/
import { TextField, Button } from '@material-ui/core';

/*Tags styleds*/
import {
  FeedContainer,
  PostContainer,
  FieldContainer,
  Img,
  ButtonContainer
} from './styles';

export default function FeedPage() {
  useProtectedPage()

  const { form, onChange, resetForm } = useForm({ text: "", title: "" })

  const handlePost = (event) => {
    event.preventDefault()
    createPost(form)
    resetForm()
  }

  return (
    <FeedContainer>
      <PostContainer onSubmit={handlePost}>
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
            color="secondary"
            type="submit"
            size='large'
          >
            Post
        </Button>
        </ButtonContainer>
      </PostContainer>
    </FeedContainer>
  );
}