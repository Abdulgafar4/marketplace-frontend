import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const renderCommonFields = (categoryData:any, setCategoryData:any) => (
    <>
        <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Input
                id="brand"
                value={(categoryData as any).brand || ""}
                onChange={(e) => setCategoryData({ ...categoryData, brand: e.target.value })}
            />
        </div>
    </>
);
export const renderDimensionsFields = (categoryData: any,  setCategoryData:any) => (
    <div className="space-y-2">
        <Label htmlFor="dimensions">Dimensions (inches)</Label>
        <div className="grid grid-cols-3 gap-2">
            <Input
                type="number"
                placeholder="Width"
                value={(categoryData as any).dimensions?.width || ""}
                onChange={(e) => setCategoryData({
                    ...categoryData,
                    dimensions: {
                        ...((categoryData as any).dimensions || {}),
                        width: parseFloat(e.target.value),
                        unit: "inches",
                    },
                })}
            />
            <Input
                type="number"
                placeholder="Height"
                value={(categoryData as any).dimensions?.height || ""}
                onChange={(e) => setCategoryData({
                    ...categoryData,
                    dimensions: {
                        ...((categoryData as any).dimensions || {}),
                        height: parseFloat(e.target.value),
                        unit: "inches",
                    },
                })}
            />
            <Input
                type="number"
                placeholder="Depth"
                value={(categoryData as any).dimensions?.depth || ""}
                onChange={(e) => setCategoryData({
                    ...categoryData,
                    dimensions: {
                        ...((categoryData as any).dimensions || {}),
                        depth: parseFloat(e.target.value),
                        unit: "inches",
                    },
                })}
            />
        </div>
    </div>
);
