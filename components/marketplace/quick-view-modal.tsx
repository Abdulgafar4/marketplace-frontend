import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Mail, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface QuickViewModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
    link: string;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose, link }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] sm:p-8">
                <div className="grid md:grid-cols-2 gap-0 max-h-[90vh] overflow-auto">
                    {/* Image Section */}
                    <div className="relative h-[250px] md:h-full">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        <h2 className="text-xl font-bold">{product.name}</h2>

                        <div className="space-y-4 mt-4">
                            {/* Price and Stock Status */}
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-primary">
                                    ${product.price.toFixed(2)}
                                </p>
                                <Badge variant={product.stockCount > 0 ? "default" : "destructive"}>
                                    {product.stockCount > 0 ? `${product.stockCount} in stock` : "Out of stock"}
                                </Badge>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${
                                                product.rating && i < product.rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">({product.rating})</span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {product.description}
                            </p>

                            <Separator />

                            {/* Seller Information */}
                            <div className="space-y-3">
                                <h4 className="font-semibold">Seller Information</h4>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">{product.seller.name}</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin className="w-4 h-4" />
                                        <span>{product.seller.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Phone className="w-4 h-4" />
                                        <span>{product.seller.contact}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link href={link}>
                            <Button className="w-full mt-6">Full Details</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default QuickViewModal;