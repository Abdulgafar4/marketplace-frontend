import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductActionsProps {
  sellerContact: string;
}

const ActionButtons: React.FC<ProductActionsProps> = ({ sellerContact }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); 

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="default"
        className="w-full h-12 rounded-lg"
        // onClick={handleSaveForLater}
      >
        Save for Later
      </Button>

      {/* Quick Contact button opens a dialog */}
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
