import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {CategorySpecificData, CategoryType} from "@/lib/constants";
import {ElectronicsForm} from "@/components/dashboard/category/CategoriesForm/Electronics";
import {renderCommonFields} from "@/components/dashboard/category";
import React from "react";

interface CategoryFieldsProps {
    category: CategoryType | "";
    categoryData: Partial<CategorySpecificData[keyof CategorySpecificData]>;
    setCategoryData: (data: Partial<CategorySpecificData[keyof CategorySpecificData]>) => void;
}

export default function CategoryFields({
                                           category,
                                           categoryData,
                                           setCategoryData,
                                       }: CategoryFieldsProps) {
    if (!category) return null;

    const renderCommonFields = () => (
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

    const renderDimensionsFields = () => (
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

    switch (category) {
        case CategoryType.ELECTRONICS_APPLIANCES:
         return (
             <>
                 {renderCommonFields()}
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
                             value={(categoryData as any).warranty?.has_warranty ? "yes" : "no"}
                             onValueChange={(value) =>
                                 setCategoryData({
                                     ...categoryData,
                                     warranty_status: {
                                         ...(categoryData as any).warranty_status,
                                         has_warranty: true,
                                         expiry_date: new Date(value),
                                     },
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

                     {(categoryData as any).warranty_status?.has_warranty && (
                         <div className="space-y-2">
                             <Label htmlFor="warrantyExpiry">Warranty Expiry Date</Label>
                             <Input
                                 id="warrantyExpiry"
                                 type="date"
                                 value={
                                     (categoryData as any).warranty_status?.expiry_date &&
                                     !isNaN(Date.parse((categoryData as any).warranty_status.expiry_date))
                                         ? new Date((categoryData as any).warranty_status.expiry_date).toISOString().split('T')[0]
                                         : ""
                                 }
                                 onChange={(e) =>
                                     setCategoryData({
                                         ...categoryData,
                                         warranty_status: {
                                             ...(categoryData as any).warranty_status,
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
                             value={(categoryData as any).technical_specs?.year || ""}
                             onChange={(e) =>
                                 setCategoryData({
                                     ...categoryData,
                                     technical_specs: {
                                         ...(categoryData as any).technical_specs,
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
                             value={(categoryData as any).technical_specs?.color || ""}
                             onChange={(e) =>
                                 setCategoryData({
                                     ...categoryData,
                                     technical_specs: {
                                         ...(categoryData as any).technical_specs,
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
                             value={(categoryData as any).technical_specs?.dimensions || ""}
                             onChange={(e) =>
                                 setCategoryData({
                                     ...categoryData,
                                     technical_specs: {
                                         ...(categoryData as any).technical_specs,
                                         dimensions: e.target.value,
                                     },
                                 })
                             }
                         />
                     </div>
             </>
         );

        case CategoryType.FURNITURE:
            return (
                <>
                    {renderCommonFields()}
                    <div className="space-y-2">
                        <Label htmlFor="material">Material</Label>
                        <Input
                            id="material"
                            value={(categoryData as any).material?.join(", ") || ""}
                            onChange={(e) =>
                                setCategoryData({
                                    ...categoryData,
                                    material: e.target.value.split(",").map((m) => m.trim()),
                                })
                            }
                            placeholder="Enter materials separated by commas"
                        />
                    </div>
                    {renderDimensionsFields()}
                </>
            );

        case CategoryType.WOMENS_FASHION:
        case CategoryType.MENS_FASHION:
            return (
                <>
                    {renderCommonFields()}
                    <div className="space-y-2">
                        <Label htmlFor="size">Size</Label>
                        <Input
                            id="size"
                            value={(categoryData as any).size || ""}
                            onChange={(e) => setCategoryData({ ...categoryData, size: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                            value={(categoryData as any).category || ""}
                            onValueChange={(value: any) => setCategoryData({ ...categoryData, category: value })}
                        >
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tops">Tops</SelectItem>
                                <SelectItem value="bottoms">Bottoms</SelectItem>
                                <SelectItem value="dresses">Dresses</SelectItem>
                                <SelectItem value="shoes">Shoes</SelectItem>
                                <SelectItem value="accessories">Accessories</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </>
            );

        case CategoryType.VEHICLES_PARTS:
            return (
                <>
                    {renderCommonFields()}
                    <div className="space-y-2">
                        <Label htmlFor="make">Make</Label>
                        <Input
                            id="make"
                            value={(categoryData as any).make || ""}
                            onChange={(e) => setCategoryData({ ...categoryData, make: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="model">Model</Label>
                        <Input
                            id="model"
                            value={(categoryData as any).model || ""}
                            onChange={(e) => setCategoryData({ ...categoryData, model: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="year">Year</Label>
                        <Input
                            id="year"
                            type="number"
                            value={(categoryData as any).year || ""}
                            onChange={(e) => setCategoryData({ ...categoryData, year: parseInt(e.target.value) })}
                        />
                    </div>
                </>
            );

        case CategoryType.GARAGE_SALES:
            return (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="event_date">Event Date</Label>
                        <Input
                            id="event_date"
                            type="datetime-local"
                            value={(categoryData as any).event_date?.toISOString().slice(0, 16) || ""}
                            onChange={(e) =>
                                setCategoryData({ ...categoryData, event_date: new Date(e.target.value) })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="end_date">End Date</Label>
                        <Input
                            id="end_date"
                            type="datetime-local"
                            value={(categoryData as any).end_date?.toISOString().slice(0, 16) || ""}
                            onChange={(e) =>
                                setCategoryData({ ...categoryData, end_date: new Date(e.target.value) })
                            }
                        />
                    </div>
                </>
            );

        case CategoryType.HOME_GARDEN:
            return (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="categoryType">Category Type</Label>
                        <Select
                            value={(categoryData as any).categoryType || ""}
                            onValueChange={(value) =>
                                setCategoryData({...(categoryData as any), categoryType: value})
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category type"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="indoor">Indoor</SelectItem>
                                <SelectItem value="outdoor">Outdoor</SelectItem>
                                <SelectItem value="tools">Tools</SelectItem>
                                <SelectItem value="decor">Decor</SelectItem>
                                <SelectItem value="kitchen">Kitchen</SelectItem>
                                <SelectItem value="bathroom">Bathroom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="brand">Brand</Label>
                        <Input
                            id="brand"
                            type="text"
                            value={(categoryData as any).brand || ""}
                            onChange={(e) =>
                                setCategoryData({...(categoryData as any), brand: e.target.value})
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensions</Label>
                        <Input
                            id="dimensions"
                            type="text"
                            value={(categoryData as any).dimensions || ""}
                            onChange={(e) =>
                                setCategoryData({...(categoryData as any), dimensions: e.target.value})
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="material">Material</Label>
                        <Input
                            id="material"
                            type="text"
                            value={(categoryData as any).material?.join(", ") || ""}
                            onChange={(e) =>
                                setCategoryData({
                                    ...(categoryData as any),
                                    material: e.target.value.split(",").map((item) => item.trim()),
                                })
                            }
                        />
                    </div>


                </>
            );

        case CategoryType.BABY_KIDS:
            return (
                <>

                    <div className="space-y-2">
                        <Label htmlFor="ageRange">Age Range</Label>
                        <Select
                            value={(categoryData as any).ageRange || ""}
                            onValueChange={(value) =>
                                setCategoryData({...(categoryData as any), ageRange: value})
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select age range"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="infant">Infant</SelectItem>
                                <SelectItem value="toddler">Toddler</SelectItem>
                                <SelectItem value="preschool">Preschool</SelectItem>
                                <SelectItem value="school_age">School Age</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                            value={(categoryData as any).gender || ""}
                            onValueChange={(value) =>
                                setCategoryData({...(categoryData as any), gender: value})
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select gender"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="boys">Boys</SelectItem>
                                <SelectItem value="girls">Girls</SelectItem>
                                <SelectItem value="unisex">Unisex</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="categoryType">Category Type</Label>
                        <Select
                            value={(categoryData as any).categoryType || ""}
                            onValueChange={(value) =>
                                setCategoryData({...(categoryData as any), categoryType: value})
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category type"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="clothing">Clothing</SelectItem>
                                <SelectItem value="toys">Toys</SelectItem>
                                <SelectItem value="furniture">Furniture</SelectItem>
                                <SelectItem value="gear">Gear</SelectItem>
                                <SelectItem value="accessories">Accessories</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="brand">Brand</Label>
                        <Input
                            id="brand"
                            type="text"
                            value={(categoryData as any).brand || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), brand: e.target.value })
                            }
                        />
                    </div>

                </>
            );

        case CategoryType.HEALTH_BEAUTY:
            return (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="brand">Brand</Label>
                        <Input
                            id="brand"
                            type="text"
                            value={(categoryData as any).brand || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), brand: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="categoryType">Category Type</Label>
                        <Select
                            value={(categoryData as any).categoryType || ""}
                            onValueChange={(value) =>
                                setCategoryData({ ...(categoryData as any), categoryType: value })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="skincare">Skincare</SelectItem>
                                <SelectItem value="makeup">Makeup</SelectItem>
                                <SelectItem value="haircare">Haircare</SelectItem>
                                <SelectItem value="fragrance">Fragrance</SelectItem>
                                <SelectItem value="wellness">Wellness</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="expiration_date">Expiration Date</Label>
                        <Input
                            id="expiration_date"
                            type="date"
                            value={(categoryData as any).expirationDate || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), expirationDate: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sealed">Sealed</Label>
                        <Select
                            value={(categoryData as any).sealed ? "true" : "false"}
                            onValueChange={(value) =>
                                setCategoryData({ ...(categoryData as any), sealed: value === "true" })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select if sealed" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="true">Yes</SelectItem>
                                <SelectItem value="false">No</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="organic">Organic</Label>
                        <Select
                            value={(categoryData as any).organic ? "true" : "false"}
                            onValueChange={(value) =>
                                setCategoryData({ ...(categoryData as any), organic: value === "true" })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select if organic" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="true">Yes</SelectItem>
                                <SelectItem value="false">No</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </>
            );


        case CategoryType.SPORTS_OUTDOORS:
            return (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="brand">Brand</Label>
                        <Input
                            id="brand"
                            type="text"
                            value={(categoryData as any).brand || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), brand: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sport_type">Sport Type</Label>
                        <Input
                            id="sport_type"
                            type="text"
                            value={(categoryData as any).sportType || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), sportType: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="equipment_type">Equipment Type</Label>
                        <Input
                            id="equipment_type"
                            type="text"
                            value={(categoryData as any).equipmentType || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), equipmentType: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="size">Size</Label>
                        <Input
                            id="size"
                            type="text"
                            value={(categoryData as any).size || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), size: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                            value={(categoryData as any).gender || ""}
                            onValueChange={(value) =>
                                setCategoryData({ ...(categoryData as any), gender: value })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mens">Mens</SelectItem>
                                <SelectItem value="womens">Womens</SelectItem>
                                <SelectItem value="unisex">Unisex</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </>
            );


        case CategoryType.GAMES_HOBBIES:
            return (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="platform">Platform</Label>
                        <Input
                            id="platform"
                            type="text"
                            value={(categoryData as any).platform || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), platform: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="complete">Complete</Label>
                        <Select
                            value={(categoryData as any).complete || ""}
                            onValueChange={(value) =>
                                setCategoryData({ ...(categoryData as any), complete: value })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select completeness" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="true">Complete</SelectItem>
                                <SelectItem value="false">Incomplete</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="age_rating">Age Rating</Label>
                        <Input
                            id="age_rating"
                            type="text"
                            value={(categoryData as any).ageRating || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), ageRating: e.target.value })
                            }
                        />
                    </div>
                </>
            );


        case CategoryType.BOOKS_MUSIC:
            return (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <Select
                            value={(categoryData as any).type || ""}
                            onValueChange={(value) =>
                                setCategoryData({ ...(categoryData as any), type: value })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="book">Book</SelectItem>
                                <SelectItem value="album">Album</SelectItem>
                                <SelectItem value="instrument">Instrument</SelectItem>
                                <SelectItem value="accessory">Accessory</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="format">Format</Label>
                        <Input
                            id="format"
                            type="text"
                            value={(categoryData as any).format || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), format: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="genre">Genre</Label>
                        <Input
                            id="genre"
                            type="text"
                            value={(categoryData as any).genre || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), genre: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="author_artist">Author/Artist</Label>
                        <Input
                            id="author_artist"
                            type="text"
                            value={(categoryData as any).authorArtist || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), authorArtist: e.target.value })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="isbn">ISBN</Label>
                        <Input
                            id="isbn"
                            type="text"
                            value={(categoryData as any).isbn || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), isbn: e.target.value })
                            }
                        />
                    </div>
                </>
            );


        case CategoryType.PET_SUPPLIES:
            return (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="petType">Pet Type</Label>
                        <Input
                            id="petType"
                            type="text"
                            value={(categoryData as any).petType || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), petType: e.target.value })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="categoryType">Category Type</Label>
                        <Select value={(categoryData as any).categoryType || ""} onValueChange={(value) => setCategoryData({ ...(categoryData as any), categoryType: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select category type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="food">Food</SelectItem>
                                <SelectItem value="toys">Toys</SelectItem>
                                <SelectItem value="accessories">Accessories</SelectItem>
                                <SelectItem value="housing">Housing</SelectItem>
                                <SelectItem value="grooming">Grooming</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="brand">Brand</Label>
                        <Input
                            id="brand"
                            type="text"
                            value={(categoryData as any).brand || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), brand: e.target.value })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ageRange">Age Range</Label>
                        <Input
                            id="ageRange"
                            type="text"
                            value={(categoryData as any).ageRange || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), ageRange: e.target.value })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="size">Size</Label>
                        <Input
                            id="size"
                            type="text"
                            value={(categoryData as any).size || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), size: e.target.value })
                            }
                        />
                    </div>
                </>
            );



        case CategoryType.ART_COLLECTIBLES:
            return (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="artistMaker">Artist/Maker</Label>
                        <Input
                            id="artistMaker"
                            type="text"
                            value={(categoryData as any).artistMaker || ""}
                            onChange={(e) =>
                                setCategoryData({...(categoryData as any), artistMaker: e.target.value})
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="categoryType">Category Type</Label>
                        <Select
                            value={(categoryData as any).categoryType || ""}
                            onValueChange={(value) => setCategoryData({...(categoryData as any), categoryType: value})}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="fine_art">Fine Art</SelectItem>
                                <SelectItem value="antiques">Antiques</SelectItem>
                                <SelectItem value="coins">Coins</SelectItem>
                                <SelectItem value="stamps">Stamps</SelectItem>
                                <SelectItem value="memorabilia">Memorabilia</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="eraPeriod">Era/Period</Label>
                        <Input
                            id="eraPeriod"
                            type="text"
                            value={(categoryData as any).eraPeriod || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), eraPeriod: e.target.value })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="authenticityCert">Authenticity Certificate</Label>
                        <Select
                            value={(categoryData as any).authenticityCert ? "true" : "false"}
                            onValueChange={(value) =>
                                setCategoryData({ ...(categoryData as any), authenticityCert: value === "true" })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Has authenticity certificate?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="true">Yes</SelectItem>
                                <SelectItem value="false">No</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="medium">Medium</Label>
                        <Input
                            id="medium"
                            type="text"
                            value={(categoryData as any).medium || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), medium: e.target.value })
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensions</Label>
                        <Input
                            id="dimensions"
                            type="text"
                            value={(categoryData as any).dimensions || ""}
                            onChange={(e) =>
                                setCategoryData({ ...(categoryData as any), dimensions: e.target.value })
                            }
                        />
                    </div>
                </>
            );


        case CategoryType.WANTED:
            return renderCommonFields();

        case CategoryType.OTHER:
            return null

        default:
            return null;
    }
}