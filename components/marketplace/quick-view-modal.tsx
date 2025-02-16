import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {useSeller} from "@/lib/hooks/useSeller";
import {capitalize} from "@/lib/utils";

interface QuickViewModalProps {
    product: BaseListingData;
    isOpen: boolean;
    onClose: () => void;
    link: string;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose, link }) => {
    const { data } = useSeller()

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] sm:p-8 dark:bg-gray-900">
                <div className="grid md:grid-cols-2 gap-0 max-h-[90vh] overflow-auto">
                    {/* Image Section */}
                    <div className="relative h-[250px] md:h-full">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        <h2 className="text-xl font-bold">{capitalize(product.title)}</h2>

                        <div className="space-y-4 mt-4">
                            {/* Price and Stock Status */}
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-primary">
                                    ${product.price.toFixed(2)}
                                </p>
                                <Badge variant={product.status == "Active" ? "default" : "destructive"}>
                                    {product.status == "Active" ? `${product.status}` : "Negotiating"}
                                </Badge>
                            </div>

                            {/* Rating */}
                            {/*<div className="flex items-center gap-2">*/}
                            {/*    <div className="flex items-center">*/}
                            {/*        {[...Array(5)].map((_, i) => (*/}
                            {/*            <Star*/}
                            {/*                key={i}*/}
                            {/*                className={`w-4 h-4 ${*/}
                            {/*                    product.rating && i < product.rating*/}
                            {/*                        ? "fill-yellow-400 text-yellow-400"*/}
                            {/*                        : "text-gray-300"*/}
                            {/*                }`}*/}
                            {/*            />*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*    <span className="text-sm text-gray-600">({product.rating})</span>*/}
                            {/*</div>*/}

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {product.description}
                            </p>

                            <Separator />

                            {/* Seller Information */}
                            <div className="space-y-3">
                                <h4 className="font-semibold">Seller Information</h4>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">{`${data?.firstName} ${data?.lastName}`}</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin className="w-4 h-4" />
                                        <span>{data?.location.split(',')[0]}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Phone className="w-4 h-4" />
                                        <span>{data?.contact}</span>
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