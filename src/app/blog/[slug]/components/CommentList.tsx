interface CommentListProps {
    comments: string[];
  }
  
  export default function CommentList({ comments }: CommentListProps): JSX.Element {
    if (comments.length === 0) {
      return <p>No comments yet. Be the first to comment!</p>;
    }
  
    return (
      <ul className="list-disc pl-6">
        {comments.map((comment, index) => (
          <li key={index} className="mb-2">
            {comment}
          </li>
        ))}
      </ul>
    );
  }
  