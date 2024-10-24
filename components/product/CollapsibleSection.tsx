import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CollapsibleSectionProps {
  title: string;
  badge?: string;
  rating?: number;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  badge,
  rating,
  isOpen,
  onToggle,
  children,
}) => (
  <Card className="rounded-lg shadow-lg overflow-hidden">
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger asChild>
        <CardContent className="p-0">
          <div className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center space-x-3">
              <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
              {badge && (
                <Badge variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {rating && (
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium dark:text-gray-300">
                    {rating}
                  </span>
                </div>
              )}
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              )}
            </div>
          </div>
        </CardContent>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <CardContent className="p-4 bg-white dark:bg-gray-900">
          {children}
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  </Card>
);

export default CollapsibleSection;
