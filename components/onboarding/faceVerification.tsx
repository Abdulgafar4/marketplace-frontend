import React, { useState, useRef, ChangeEvent } from 'react';
import { Camera, X, Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useUser } from "@clerk/nextjs";

interface FaceVerificationProps {
    onBack: () => void;
    onNext: () => void;
    onVerification: (verified: boolean) => void;
}

interface UserMetadata {
    faceVerified?: boolean;
    [key: string]: any;
}

const FaceVerification: React.FC<FaceVerificationProps> = ({
                                                               onBack,
                                                               onNext,
                                                               onVerification
                                                           }) => {
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { user } = useUser();

    const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                toast.error('Please select an image file');
                return;
            }

            const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
            if (file.size > MAX_FILE_SIZE) {
                toast.error('Image size should be less than 5MB');
                return;
            }

            setImage(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleVerification = async (): Promise<void> => {
        if (!image || !user) {
            toast.error('Please select an image first');
            return;
        }

        setIsUploading(true);
        try {
            // Upload image to Clerk
            await user.setProfileImage({ file: image });

            // Update verification status in metadata
            await user.update({
                unsafeMetadata: {
                    ...user.unsafeMetadata,
                    faceVerified: true,
                },
            });

            onVerification(true);
            toast.success('Face verification successful!');
            onNext();
        } catch (error) {
            console.error('Verification error:', error);
            toast.error(error instanceof Error ? error.message : 'Upload failed. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    const clearImage = (): void => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setImage(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Cleanup preview URL on component unmount
    React.useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Face Verification</h2>
            <p className="text-sm text-muted-foreground">
                Complete a quick face verification to earn your Trust Badge and build
                credibility with other users.
            </p>

            <div className="flex justify-center">
                <div className="relative w-64 h-64 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    {previewUrl ? (
                        <>
                            <img
                                src={previewUrl}
                                alt="Verification"
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={clearImage}
                                type="button"
                                className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                                aria-label="Clear image"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </>
                    ) : (
                        <div className="text-center space-y-2">
                            <Camera size={64} className="mx-auto text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">Click below to upload</p>
                        </div>
                    )}
                </div>
            </div>

            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageSelect}
                ref={fileInputRef}
                aria-label="Upload verification photo"
            />

            <Button
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
                variant={previewUrl ? "outline" : "default"}
                disabled={isUploading}
                type="button"
            >
                <Upload className="w-4 h-4 mr-2" />
                {previewUrl ? 'Change Photo' : 'Upload Photo'}
            </Button>

            <Button
                onClick={handleVerification}
                className="w-full"
                disabled={!previewUrl || isUploading}
                type="button"
            >
                {isUploading ? 'Uploading...' : 'Verify & Upload'}
            </Button>

            <div className="flex justify-between">
                <Button
                    variant="outline"
                    onClick={onBack}
                    disabled={isUploading}
                    type="button"
                >
                    Back
                </Button>
                <Button
                    onClick={onNext}
                    disabled={isUploading}
                    type="button"
                >
                    Skip for now
                </Button>
            </div>
        </div>
    );
};

export default FaceVerification;