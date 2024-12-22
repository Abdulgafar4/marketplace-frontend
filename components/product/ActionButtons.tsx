import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";
import { useWishlistMutation } from "@/lib/hooks/useWishlist";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductActionsProps {
  sellerContact: string;
  product: any;
  isInWishlist: boolean;
}

const ActionButtons: React.FC<ProductActionsProps> = ({
                                                        sellerContact,
                                                        product,
                                                        isInWishlist
                                                      }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const wishlistMutation = useWishlistMutation();

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      quantity: 1
    };

    wishlistMutation.mutate({
      product: updatedProduct,
      action: isInWishlist ? 'remove' : 'add'
    });
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
      <div className="flex items-center gap-4">
        <Button
            variant="default"
            className="w-full h-12 rounded-lg flex items-center justify-center gap-2"
            onClick={handleWishlistToggle}
            disabled={wishlistMutation.isPending}
        >
          <Heart
              className={`w-5 h-5 ${
                  hydrated && isInWishlist ? "fill-red-500 text-red-500" : ""
              } ${wishlistMutation.isPending ? "opacity-50" : ""}`}
          />
          {isInWishlist ? 'Remove from Wishlist' : 'Save for Later'}
        </Button>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
                variant="outline"
                className="w-full h-12 rounded-lg flex justify-center items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Quick Contact
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Seller Contact Information</DialogTitle>
            </DialogHeader>
            <div>
              <p>{`Contact: ${sellerContact}`}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
  );
};

export default ActionButtons;