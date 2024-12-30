"use client";

import { useParams } from "next/navigation"; // For accessing route parameters
import { posts } from "../posts";
import { useState } from "react";
import Image from "next/image";

const BlogPost = () => {
  const { slug } = useParams(); // Accessing the dynamic 'slug' parameter
  const post = posts.find((p) => p.slug === slug);

  // If the post is not found, return a 404-like message
  if (!post) {
    return (
      <div className="text-center text-red-500 font-bold text-2xl mt-8">
        Post not found
      </div>
    );
  }

  // Comments state
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Add comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 bg-gradient-to-b from-blue-50 to-white shadow-md rounded-lg">
      {/* Post Title */}
      <h1 className="text-4xl font-bold mb-4 text-blue-700 transition-all duration-300 hover:text-blue-500">
        {post.title}
      </h1>
      <p className="mb-4 text-gray-600">{post.content}</p>

      {/* Post Details */}
      <div className="bg-white p-6 rounded-md shadow-lg transition duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          {post.details.heading}
        </h2>
        <p className="mb-4 text-gray-700">{post.details.description}</p>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          {post.details.points.map((point, index) => (
            <li key={index} className="hover:text-blue-500 transition">
              {point}
            </li>
          ))}
        </ul>

        {/* Optional Image */}
        {post.details.image && (
          <div className="my-6">
            <Image
              src={post.details.image.url}
              alt={post.details.image.alt}
              width={500}
              height={500}
              className="rounded-md shadow-lg"
            />
          </div>
        )}

        {/* Cat Breeds or any other section */}
        {post.details.breeds &&
          post.details.breeds.map((breed, index) => (
            <div
              key={index}
              className="my-6 bg-blue-50 p-4 rounded-md shadow transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {breed.name}
              </h3>
              <Image
                src={breed.image.url}
                alt={breed.image.alt}
                width={500}
                height={500}
                className="rounded-md mt-2"
              />
              <p className="mt-2 text-gray-700">{breed.description}</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-2">
                {breed.points.map((point, index) => (
                  <li key={index} className="hover:text-blue-500 transition">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      {/* Comment Section */}
      <div className="mt-8 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600">Comments</h2>
        <div className="my-4">
          {/* Existing Comments */}
          {comments.length === 0 ? (
            <p className="text-gray-600 italic">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            comments.map((comment, index) => (
              <p
                key={index}
                className="border-b py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                {comment}
              </p>
            ))
          )}
        </div>

        {/* Add New Comment */}
        <textarea
          className="border p-2 w-full my-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          rows={4}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
