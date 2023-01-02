import { comments } from "../comments";
import Comment from "./comment";
import { ContentComments } from "./style";

function Comments(): JSX.Element {
  return (
    <ContentComments>
      <h4>Comentários</h4>
      {comments.map((cmt) => (
        <Comment
          key={cmt.id}
          name={cmt.name}
          img={cmt.img}
          date={cmt.date}
          text={cmt.text}
        />
      ))}
    </ContentComments>
  );
}

export default Comments;
