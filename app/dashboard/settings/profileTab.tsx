import { useSeller } from "@/lib/hooks/useSeller";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import EditProfileForm from "@/app/dashboard/settings/editProfile";
import Loader from "@/components/loading";

function ProfileTab() {
    const { data: profile, isLoading, error } = useSeller();
    const { user } = useUser();
    const [isEditing, setIsEditing] = useState(false);

    if (isLoading || !profile) {
        return (
            <div className="flex items-center justify-center p-8">
                <Loader message={"Loading your profile..."} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-8 text-red-500">
                Failed to load profile data. Please try again later.
            </div>
        );
    }

    const sellerData: UpdateSellerDTO = {
        id: profile.$id,
        data: {
            firstName: profile.firstName,
            lastName: profile.lastName,
            contact: profile.contact,
            userName: profile.userName,
            location: profile.location,
            image: profile.image,
            email: profile.email,
        },
    }

    return (
        <Card className="bg-white dark:bg-gray-900">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="text-gray-900 dark:text-white">Profile Information</CardTitle>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-gray-900 dark:text-white"
                    >
                        <Pencil className="h-4 w-4 mr-2"/>

                        <span className="hidden md:inline">{isEditing ? 'View Profile' : 'Edit Profile'}</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                {isEditing ? (
                    <EditProfileForm profile={sellerData} onCancel={() => setIsEditing(false)} />
                ) : (
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src={user?.imageUrl} alt={profile.userName} />
                                <AvatarFallback>{profile.firstName[0]}{profile.lastName[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-sm sm:text-xl font-semibold text-gray-900 dark:text-white">{profile.firstName} {profile.lastName}</h3>
                                <p className="text-gray-500 dark:text-gray-400">@{profile.userName}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label className="text-gray-500 dark:text-gray-400">Email</Label>
                                <p className="text-gray-900 dark:text-white">{profile.email}</p>
                            </div>
                            <div>
                                <Label className="text-gray-500 dark:text-gray-400">Contact</Label>
                                <p className="text-gray-900 dark:text-white">{profile.contact}</p>
                            </div>
                            <div>
                                <Label className="text-gray-500 dark:text-gray-400">Location</Label>
                                <p className="text-gray-900 dark:text-white">{profile.location}</p>
                            </div>
                            <div>
                                <Label className="text-gray-500 dark:text-gray-400">Join At</Label>
                                <p className="text-gray-900 dark:text-white">
                                    {profile.$createdAt ? format(new Date(profile.$createdAt), 'MMMM dd, yyyy') : 'N/A'}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default ProfileTab;
