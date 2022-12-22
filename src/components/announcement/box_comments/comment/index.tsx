import { ContentComment } from "./style";

function Comment(props: any) {
  return (
    <ContentComment>
      <div key={props.id}>
        <img alt={props.name} src={props.img}></img>
        <h6>{props.name}</h6>
        <span>{props.date}</span>
      </div>
      <p>{props.text}</p>
    </ContentComment>
  );
}
<></>;

export default Comment;
