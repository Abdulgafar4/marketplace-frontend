"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function ProductCategory({
  categories,
  onAddCategory,
}: {
  categories: string[];
  onAddCategory: (category: string) => void;
}) {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.trim()) {
      onAddCategory(newCategory.trim());
      setNewCategory(""); // Clear input after submission
      setIsCatOpen(false); // Close dialog
    }
  };

  return (
    <Dialog open={isCatOpen} onOpenChange={setIsCatOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-2">
          <Plus className="mr-2 h-4 w-4" /> Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
          <DialogDescription>
            Enter the name of the new product category.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category Name</Label>
            <Input
              id="category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter new category name"
              required
            />
          </div>
          <Button type="submit">Add Category</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
