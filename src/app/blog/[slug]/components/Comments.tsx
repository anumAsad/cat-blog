import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function Comments(): JSX.Element {
  const [comments, setComments] = useState<string[]>([]);

  const addComment = (comment: string): void => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}
