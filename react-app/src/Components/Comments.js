import { useState } from "react";
import axios from 'axios';

const Comments = ({ comments, id}) => {
  const [newComment, setNewComment] = useState("");
  const onSubmit = () => {
    axios
    .post(`http://localhost:3002/post/${id}/comment`, {newComment}) // `url` is the url to post to, `data` is the data to send in the body of the HTTP request
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  }

    return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
      {comments.map((comment) => <li key={comment}>{comment}</li>)}
      <div>
      <input type="text" placeholder="New Comment" value={newComment} onChange={e => setNewComment(e.target.value)} />
    </div>
      <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button>
    </div>
  }
  
export default Comments;