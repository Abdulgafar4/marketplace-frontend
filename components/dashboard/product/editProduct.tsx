"use client";

import {useState, useEffect, useCallback} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Pencil, Upload} from "lucide-react";
import { CategoryType, Condition, PaymentType, Status } from "@/lib/constants";
import { getCategoryLabel } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { productSchema } from "@/lib/schema";
import { toast } from "react-toastify";
import {useDropzone} from "react-dropzone";
import {useUpdateProduct} from "@/lib/hooks/useProduct";
import {ScrollArea} from "@/components/ui/scroll-area";

type ProductFormData = z.infer<typeof productSchema>;

export default function EditProduct({
                                        product,
                                    }: {
    product: ProductFormData;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [uploadingImages, setUploadingImages] = useState(false);
    const { mutateAsync: updateProduct } = useUpdateProduct();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<ProductFormData>({
        mode: "onChange",
        resolver: zodResolver(productSchema),
        defaultValues: product,
    });

    const images = watch("images");

    useEffect(() => {
        if (product) {
            reset(product);
        }
    }, [product, reset]);

    const handleProductSubmit = async (data: ProductFormData) => {
        try {
            await updateProduct({ id: product.$id!, data });
            toast.success("Product updated successfully");
            setIsOpen(false);
        } catch (error) {
            console.error("Failed to update product:", error);
            toast.error("Error updating product");
        }
    };

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            const uploadPreset = "MarketPlace";
            const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

            if (!cloudName) {
                console.error("Cloudinary cloud name is not configured");
                return;
            }

            setUploadingImages(true);

            try {
                const uploadedImageURLs = await Promise.all(
                    acceptedFiles.map(async (file) => {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", uploadPreset);

                        const response = await fetch(
                            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                            {
                                method: "POST",
                                body: formData,
                            }
                        );

                        if (!response.ok) {
                            throw new Error("Failed to upload image");
                        }

                        const data = await response.json();
                        return data.secure_url;
                    })
                );

                setValue("images", [...images, ...uploadedImageURLs]);
            } catch (error) {
                console.error("Error uploading images:", error);
            } finally {
                setUploadingImages(false);
            }
        },
        [setValue, images]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: true,
    });

    const removeImage = (index: number) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setValue("images", updatedImages);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] md:max-h-[80em] p-0">
                <ScrollArea className="h-screen">
                    <div className="p-6">

                        <DialogHeader>
                            <DialogTitle>Edit Product</DialogTitle>
                            <DialogDescription>
                                Make changes to your product listing.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(handleProductSubmit)} className="space-y-4">
                            {/* Image Upload Section */}
                            <div className="space-y-2">
                                <Label>Images</Label>
                                <div
                                    {...getRootProps()}
                                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                                        isDragActive
                                            ? "border-primary bg-primary/10"
                                            : "border-gray-300 hover:border-primary"
                                    }`}
                                >
                                    <input {...getInputProps()} />
                                    <Upload className="mx-auto h-12 w-12 text-gray-400"/>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {uploadingImages
                                            ? "Uploading images..."
                                            : "Drag 'n' drop some images here, or click to select files"}
                                    </p>
                                </div>
                                {images && images.length > 0 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                                        {images.map((image, index) => (
                                            <div key={index} className="relative">
                                                <img
                                                    src={image}
                                                    alt={`Uploaded ${index + 1}`}
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {errors.images && (
                                    <p className="text-red-500 text-sm">{errors.images.message}</p>
                                )}
                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Title */}
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        {...register("title")}
                                        className={errors.title ? "border-red-500" : ""}
                                    />
                                    {errors.title && (
                                        <p className="text-red-500 text-sm">{errors.title.message}</p>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="space-y-2">
                                    <Label htmlFor="price">Price</Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        step="0.01"
                                        {...register("price", {valueAsNumber: true})}
                                        className={errors.price ? "border-red-500" : ""}
                                    />
                                    {errors.price && (
                                        <p className="text-red-500 text-sm">{errors.price.message}</p>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        {...register("description")}
                                        className={`${
                                            errors.description ? "border-red-500" : ""
                                        } min-h-[100px]`}
                                    />
                                    {errors.description && (
                                        <p className="text-red-500 text-sm">
                                            {errors.description.message}
                                        </p>
                                    )}
                                </div>

                                {/* Category */}
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select
                                        value={watch("category")}
                                        onValueChange={(value) => setValue("category", value)}
                                    >
                                        <SelectTrigger id="category">
                                            <SelectValue placeholder="Select a category"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.values(CategoryType).map((cat) => (
                                                <SelectItem key={cat} value={cat}>
                                                    {getCategoryLabel(cat)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.category && (
                                        <p className="text-red-500 text-sm">{errors.category.message}</p>
                                    )}
                                </div>

                                {/* Condition */}
                                <div className="space-y-2">
                                    <Label htmlFor="condition">Condition</Label>
                                    <Select
                                        value={watch("condition")}
                                        onValueChange={(value) => setValue("condition", value)}
                                    >
                                        <SelectTrigger id="condition">
                                            <SelectValue placeholder="Select condition"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.values(Condition).map((cond) => (
                                                <SelectItem key={cond} value={cond}>
                                                    {cond.replace("_", " ")}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.condition && (
                                        <p className="text-red-500 text-sm">{errors.condition.message}</p>
                                    )}
                                </div>

                                {/* Status */}
                                <div className="space-y-2">
                                    <Label htmlFor="status">Status</Label>
                                    <Select
                                        value={watch("status")}
                                        onValueChange={(value) => setValue("status", value)}
                                    >
                                        <SelectTrigger id="status">
                                            <SelectValue placeholder="Select Status"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Active">Active</SelectItem>
                                            <SelectItem value="Sold">Sold</SelectItem>
                                            <SelectItem value="Pending">Pending</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Payment Type */}
                                <div className="space-y-2">
                                    <Label htmlFor="paymentOptions">Payment Type</Label>
                                    <Select
                                        value={watch("paymentOptions")}
                                        onValueChange={(value) => setValue("paymentOptions", value)}
                                    >
                                        <SelectTrigger id="paymentOptions">
                                            <SelectValue placeholder="Select Payment Type"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Any">Any</SelectItem>
                                            <SelectItem value="Cash">Cash</SelectItem>
                                            <SelectItem value="eTransfer">eTransfer</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.paymentOptions && (
                                        <p className="text-red-500 text-sm">
                                            {errors.paymentOptions.message}
                                        </p>
                                    )}
                                </div>

                                {/* Brand */}
                                <div className="space-y-2">
                                    <Label htmlFor="brand">Brand</Label>
                                    <Input
                                        id="brand"
                                        {...register("brand")}
                                        className={errors.brand ? "border-red-500" : ""}
                                    />
                                    {errors.brand && (
                                        <p className="text-red-500 text-sm">{errors.brand.message}</p>
                                    )}
                                </div>

                                {/* Model */}
                                <div className="space-y-2">
                                    <Label htmlFor="model">Model</Label>
                                    <Input
                                        id="model"
                                        {...register("model")}
                                        className={errors.model ? "border-red-500" : ""}
                                    />
                                    {errors.model && (
                                        <p className="text-red-500 text-sm">{errors.model.message}</p>
                                    )}
                                </div>

                                {/* Shipping Available */}
                                <div className="space-y-2">
                                    <Label htmlFor="shipping_available">Shipping Available</Label>
                                    <Select
                                        value={watch("shipping_available") ? "true" : "false"}
                                        onValueChange={(value) =>
                                            setValue("shipping_available", value === "true")
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select option"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="true">Yes</SelectItem>
                                            <SelectItem value="false">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Pickup Available */}
                                <div className="space-y-2">
                                    <Label htmlFor="pickup_available">Pickup Available</Label>
                                    <Select
                                        value={watch("pickup_available") ? "true" : "false"}
                                        onValueChange={(value) =>
                                            setValue("pickup_available", value === "true")
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select option"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="true">Yes</SelectItem>
                                            <SelectItem value="false">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Button type="submit" className="w-full">
                                Update Product
                            </Button>
                        </form>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}