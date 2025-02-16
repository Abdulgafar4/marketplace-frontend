import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Camera, X } from 'lucide-react';

const ImageUpload = ({
                         value,
                         onChange,
                         disabled
                     }:{ value:any, onChange:any, disabled:any }) => {
    const [preview, setPreview] = useState(value);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e:any) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleFile = (file:any) => {
        if (!file.type.startsWith('image/')) {
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setPreview(reader.result);
            onChange(file);
        };
        reader.readAsDataURL(file);
    };

    const handleDragOver = (e:any) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e:any) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleRemove = () => {
        setPreview('');
        onChange(null);
    };

    return (
        <div className="space-y-2">
            <Label>Profile Image</Label>
            <div
                className={`
          relative 
          border-2 
          border-dashed 
          rounded-lg 
          p-4 
          transition-colors
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    disabled={disabled}
                />

                {preview ? (
                    <div className="relative w-32 h-32 mx-auto">
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        {!disabled && (
                            <button
                                type="button"
                                onClick={handleRemove}
                                className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                                disabled
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="text-center">
                        <Camera className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-2">
              <span className="text-gray-600">
                Drag and drop an image, or click to select
              </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            PNG, JPG, GIF up to 10MB
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUpload;