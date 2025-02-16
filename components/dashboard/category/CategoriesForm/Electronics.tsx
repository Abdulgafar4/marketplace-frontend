import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {renderCommonFields} from "@/components/dashboard/category";

export const ElectronicsForm = (categoryData: any,  setCategoryData:any) => {
    return (
        <>
            {renderCommonFields(categoryData, setCategoryData)}
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input
                        id="model"
                        value={(categoryData as any).model || ""}
                        onChange={(e) => setCategoryData({ ...categoryData, model: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="has_warranty">Warranty</Label>
                    <Select
                        value={categoryData.has_warranty ? "yes" : "no"}
                        onValueChange={(value) =>
                            setCategoryData({
                                ...categoryData,
                                    has_warranty: value === "yes",
                                    expiry_date: value === "yes" ? new Date() : undefined
                                ,
                            })
                        }
                    >
                        <SelectTrigger id="has_warranty">
                            <SelectValue placeholder="Warranty status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {categoryData.warranty_status?.has_warranty && (
                    <div className="space-y-2">
                        <Label htmlFor="warrantyExpiry">Warranty Expiry Date</Label>
                        <Input
                            id="warrantyExpiry"
                            type="date"
                            value={categoryData.warranty_status?.expiry_date ? new Date(categoryData.warranty_status.expiry_date).toISOString().split('T')[0] : ""}
                            onChange={(e) =>
                                setCategoryData({
                                    ...categoryData,
                                    warranty_status: {
                                        ...categoryData.warranty_status,
                                        has_warranty: true,
                                        expiry_date: new Date(e.target.value),
                                    },
                                })
                            }
                        />
                    </div>
                )}

                <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                        id="year"
                        type="number"
                        value={categoryData.technical_specs?.year || ""}
                        onChange={(e) =>
                            setCategoryData({
                                ...categoryData,
                                technical_specs: {
                                    ...categoryData.technical_specs,
                                    year: parseInt(e.target.value),
                                },
                            })
                        }
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <Input
                        id="color"
                        value={categoryData.technical_specs?.color || ""}
                        onChange={(e) =>
                            setCategoryData({
                                ...categoryData,
                                technical_specs: {
                                    ...categoryData.technical_specs,
                                    color: e.target.value,
                                },
                            })
                        }
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="dimensions">Dimensions</Label>
                    <Input
                        id="dimensions"
                        placeholder="Length x Width x Height"
                        value={categoryData.technical_specs?.dimensions || ""}
                        onChange={(e) =>
                            setCategoryData({
                                ...categoryData,
                                technical_specs: {
                                    ...categoryData.technical_specs,
                                    dimensions: e.target.value,
                                },
                            })
                        }
                    />
                </div>
            </div>
        </>
    );
};
