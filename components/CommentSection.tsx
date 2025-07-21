import React, { useState } from "react";
import Image from "next/image";
import useAxios from "@/hooks/useAxios";
// Removed import { FaTrash } from "react-icons/fa"; due to missing module/type

type CommentType = {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  createdAt: string;
};

type CommentSectionProps = {
  postId: string;
  comments: CommentType[];
};

// Mock current user (replace with real user context/auth in production)
const currentUser = {
  id: "1",
  username: "sapphiresiren",
  avatar: "/house.png",
};

const CommentSection: React.FC<CommentSectionProps> = ({ postId, comments: initialComments }) => {
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const axios = useAxios();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post(`/api/posts/${postId}/comments`, {
        userId: currentUser.id,
        username: currentUser.username,
        avatar: currentUser.avatar,
        text,
      });
      setComments((prev) => [...prev, res.data]);
      setText("");
    } catch (err) {
      // handle error (toast, etc.)
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (commentId: string) => {
    setComments((prev) => prev.filter((c) => c.id !== commentId)); // Optimistic UI
    try {
      await axios.delete(`/api/posts/${postId}/comments/${commentId}`);
    } catch (err) {
      // Optionally: revert UI or show error
    }
  };

  return (
    <div className="mt-2">
      {/* Comments List */}
      <div className="flex flex-col gap-2 max-h-40 overflow-y-auto mb-2">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-2 group">
            <Image
              src={comment.avatar}
              alt={comment.username}
              width={28}
              height={28}
              className="rounded-full object-cover mt-0.5"
            />
            <div className="bg-gray-100 rounded-xl px-3 py-1 flex flex-col">
              <span className="text-xs font-semibold">{comment.username}</span>
              <span className="text-xs">{comment.text}</span>
            </div>
            <span className="text-[10px] text-gray-400 mt-1 ml-1">{new Date(comment.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            {comment.userId === currentUser.id && (
              <button
                className="ml-2 text-gray-400 hover:text-red-500 p-1 rounded transition-opacity opacity-0 group-hover:opacity-100"
                title="Delete comment"
                onClick={() => handleDelete(comment.id)}
                type="button"
              >
                <span className="sr-only">Delete</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="inline-block"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7h12M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 11v6M14 11v6"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Comment Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
        <Image
          src={currentUser.avatar}
          alt={currentUser.username}
          width={28}
          height={28}
          className="rounded-full object-cover"
        />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none text-sm px-2 py-1 border border-gray-200 rounded-full focus:border-gray-400"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="text-sky-500 text-sm font-semibold disabled:opacity-50"
          disabled={loading || !text.trim()}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentSection; 