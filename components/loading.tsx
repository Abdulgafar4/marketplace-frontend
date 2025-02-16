import React from "react";
import Image from "next/image";

interface LoadingProps {
    message?: string;
}

const Loader: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full my-2">
            <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} className="animate-pulse" />
            <p className="mt-4 text-lg text-gray-700 font-medium">{message}</p>
        </div>
    );
};

export default Loader;
