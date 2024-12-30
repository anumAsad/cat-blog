import { useState } from "react";

interface CommentFormProps {
  addComment: (comment: string) => void;
}

export default function CommentForm({ addComment }: CommentFormProps): JSX.Element {
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full border p-2 rounded"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        rows={3}
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
        Add Comment
      </button>
    </form>
  );
}
