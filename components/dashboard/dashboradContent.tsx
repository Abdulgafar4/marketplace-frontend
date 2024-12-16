// DashboardContent.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dispatch, SetStateAction } from "react";
import ProductContent from "./product/productContent";

interface DashboardContentProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export function Content({ activeTab, setActiveTab }: DashboardContentProps) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="space-y-4 p-8 w-full mx-auto"
    >
      {/* Center the TabsList and set max width */}
      <TabsList className="flex justify-center space-x-4 w-full max-w-sm mx-auto">
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="products" className="space-y-4 max-w-7xl mx-auto">
        <ProductContent />
      </TabsContent>
      <TabsContent value="settings" className="space-y-4 max-w-7xl mx-auto">
        <div>Settings content goes here</div>
      </TabsContent>
    </Tabs>
  );
}
