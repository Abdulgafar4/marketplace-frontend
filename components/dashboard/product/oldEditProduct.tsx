// "use client";
//
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Pencil } from "lucide-react";
// import {CategoryType, Condition} from "@/lib/constants";
// import {getCategoryLabel} from "@/lib/utils";
//
// export default function EditProduct({
//   product,
//   onEditProduct,
//   categories,
// }: {
//   product: BaseListingData;
//   onEditProduct: (product: BaseListingData) => void;
//   categories: string[];
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [editedProduct, setEditedProduct] = useState<BaseListingData>(product);
//
//   useEffect(() => {
//     setEditedProduct(product);
//   }, [product]);
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onEditProduct(editedProduct);
//     setIsOpen(false);
//   };
//
//   console.log({"EditedProduct": editedProduct});
//
//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         <Button variant="ghost" size="icon">
//           <Pencil className="h-4 w-4" />
//           <span className="sr-only">Edit</span>
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[600px]">
//         <DialogHeader>
//           <DialogTitle>Edit Product</DialogTitle>
//           <DialogDescription>
//             Make changes to your product listing.
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Product Name</Label>
//               <Input
//                 id="name"
//                 value={editedProduct.title}
//                 onChange={(e) =>
//                   setEditedProduct({ ...editedProduct, title: e.target.value })
//                 }
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="price">Price</Label>
//               <Input
//                 id="price"
//                 type="number"
//                 step="0.01"
//                 value={editedProduct.price}
//                 onChange={(e) =>
//                   setEditedProduct({
//                     ...editedProduct,
//                     price: parseFloat(e.target.value),
//                   })
//                 }
//                 required
//               />
//             </div>
//             <div className="space-y-2 md:col-span-2">
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 value={editedProduct.description}
//                 onChange={(e) =>
//                   setEditedProduct({
//                     ...editedProduct,
//                     description: e.target.value,
//                   })
//                 }
//                 required
//                 className="min-h-[100px]"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="category">Category</Label>
//               <Select
//                 value={editedProduct.category}
//                 onValueChange={(value) =>
//                   setEditedProduct({ ...editedProduct, category: value as CategoryType})
//                 }
//               >
//                 <SelectTrigger id="category">
//                   <SelectValue placeholder="Select a category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {Object.values(CategoryType).map((cat) => (
//                       <SelectItem key={cat} value={cat}>
//                         {getCategoryLabel(cat)}
//                       </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="condition">Condition</Label>
//               <Select
//                 value={editedProduct.condition}
//                 onValueChange={(value) =>
//                   setEditedProduct({ ...editedProduct, condition: value as Condition })
//                 }
//               >
//                 <SelectTrigger id="condition">
//                   <SelectValue placeholder="Select condition" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {Object.values(Condition).map((cond) => (
//                       <SelectItem key={cond} value={cond}>
//                         {cond.replace("_", " ")}
//                       </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="imageUrl">Main Image URL</Label>
//               <Input
//                 id="imageUrl"
//                 type="url"
//                 value={editedProduct.images[0]}
//                 onChange={(e) =>
//                   setEditedProduct({
//                     ...editedProduct,
//                     images: [e.target.value],
//                   })
//                 }
//                 required
//               />
//             </div>
//           </div>
//           <Button type="submit">Update Product</Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
