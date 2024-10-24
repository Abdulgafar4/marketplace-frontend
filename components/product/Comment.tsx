import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea"; // Shadcn Textarea component
import { Button } from "@/components/ui/button"; // Shadcn Button component
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Shadcn Card components
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select"; // Shadcn Select component
import { dummyProducts } from "@/app/api/dummyData";
import { Star } from "lucide-react";

interface Comment {
  id: string;
  username: string;
  content: string;
  rating?: number;
  replies?: Comment[];
}

const CommentSection = ({ productId }: { productId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});

  // Fetch initial comments from dummyProducts
  useEffect(() => {
    const product = dummyProducts.find((p) => p.id === productId);
    if (product) {
      const initialComments = (product?.reviews ?? []).map((review) => ({
        id: review.id,
        username: review.userName,
        content: review.comment,
        rating: review.rating,
        replies: [],
      }));
      setComments(initialComments);
    }
  }, [productId]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim() && rating > 0) {
      const newComment: Comment = {
        id: (comments.length + 1).toString(),
        username: "User", // Replace with the actual username from the auth system
        content: commentText.trim(),
        rating,
        replies: [],
      };

      // Add new comment to local state
      setComments((prevComments) => [...prevComments, newComment]);

      // Add new comment and rating to the dummyProducts data
      const product = dummyProducts.find((p) => p.id === productId);
      if (product) {
        (product?.reviews ?? []).push({
          id: newComment.id,
          userId: "user1", // Replace with actual user ID from auth
          userName: "User", // Replace with actual username
          comment: newComment.content,
          rating: newComment.rating ?? 0,
          createdAt: new Date(),
          productId: "",
          helpfulCount: 0,
        });
      }

      setCommentText(""); // Clear the input
      setRating(0); // Reset the rating
    }
  };

  const handleReplySubmit = (commentId: string, e: React.FormEvent) => {
    e.preventDefault();
    const replyContent = replyText[commentId];
    if (replyContent.trim()) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...(comment.replies || []),
                  {
                    id: (comment.replies?.length || 0).toString(),
                    username: "User", // Replace with actual username
                    content: replyContent.trim(),
                  },
                ],
              }
            : comment
        )
      );
      setReplyText((prevState) => ({ ...prevState, [commentId]: "" })); // Clear the reply input
    }
  };

  return (
    <div className="space-y-6 mt-12">
      <h2 className="text-xl font-semibold">User Reviews</h2>
      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <Textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows={4}
          placeholder="Write your comment..."
        />
        {/* Rating input */}
        <Select
          value={rating.toString()}
          onValueChange={(value) => setRating(parseInt(value))}
        >
          <SelectTrigger className="w-full">
            <span>
              {rating > 0 ? (
                <div className="flex items-center">
                  {Array.from({ length: rating }, (_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
              ) : (
                "Select rating"
              )}
            </span>
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((star) => (
              <SelectItem key={star} value={star.toString()}>
                <div className="flex items-center">
                  <span className="ml-2">
                    {star} Star{star > 1 && "s"}
                  </span>
                  {Array.from({ length: star }, (_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>

      <div className="mt-6 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader className="flex flex-row justify-between space-x-4">
                <h3 className="font-semibold">{comment.username}</h3>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: comment.rating ?? 0 }, (_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-500 h-4 w-4"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p>{comment.content}</p>
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 space-y-2 pl-4 border-l">
                    {comment.replies.map((reply) => (
                      <Card key={reply.id} className="ml-4">
                        <CardHeader>
                          <h4 className="font-semibold">{reply.username}</h4>
                        </CardHeader>
                        <CardContent>
                          <p>{reply.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="space-y-2">
                <form
                  onSubmit={(e) => handleReplySubmit(comment.id, e)}
                  className="space-y-2 w-full"
                >
                  <Textarea
                    value={replyText[comment.id] || ""}
                    onChange={(e) =>
                      setReplyText((prevState) => ({
                        ...prevState,
                        [comment.id]: e.target.value,
                      }))
                    }
                    rows={2}
                    placeholder="Write a reply..."
                  />
                  <Button type="submit" size="sm">
                    Reply
                  </Button>
                </form>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
