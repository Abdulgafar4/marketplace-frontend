import {useState} from "react";
import {useSeller, useUpdateSeller} from "@/lib/hooks/useSeller";
import {toast} from "react-toastify";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {useUser} from "@clerk/nextjs";
import ImageUpload from "@/app/dashboard/settings/imageUpload";


function EditProfileForm({ profile, onCancel, isLoading }: { profile: UpdateSellerDTO, onCancel: () => void, isLoading?: boolean }) {
    const { user } = useUser();
    const { refetch } = useSeller();
    const [formData, setFormData] = useState({
        firstName: profile.data.firstName || '',
        lastName: profile.data.lastName || '',
        image: user?.imageUrl || '',
        contact: profile.data.contact,
        location: profile.data.location,
        email: profile.data.email || '',
        userName: profile.data.userName || '',
    })
    const updateSeller = useUpdateSeller()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev: any) => ({ ...prev, [name]: value }))
    }
    const handleImageChange = (file:any) => {
        setFormData((prev:any) => ({
            ...prev,
            image: file
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();


        try {

            await updateSeller.mutateAsync({
                id: profile.id,
                data: formData,
            })
            await user?.update({
                firstName: formData.firstName,
                lastName: formData.lastName,
                username: formData.userName,
            })

            await refetch();
            toast.success('Profile updated successfully!')
            onCancel()
        } catch (error) {
            console.error(error)
            toast.error('Failed to update profile. Please try again.')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <ImageUpload
                value={user?.imageUrl}
                onChange={handleImageChange}
                disabled={isLoading}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        disabled
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="userName">Username</Label>
                    <Input
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="contact">Contact</Label>
                    <Input
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        disabled
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex space-x-2 justify-end">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onCancel}
                    disabled={updateSeller.isPending}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    disabled={updateSeller.isPending}
                >
                    {updateSeller.isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                            Saving...
                        </>
                    ) : (
                        'Save Changes'
                    )}
                </Button>
            </div>
        </form>
    )
}

export default EditProfileForm;