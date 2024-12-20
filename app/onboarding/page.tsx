"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import LocationInput from "@/components/onboarding/location";
import {InputField} from "@/components/onboarding/inputField";
import {useUser} from "@clerk/nextjs";
import { toast } from "react-toastify";
import FaceVerification from "@/components/onboarding/faceVerification";

function Onboarding() {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    location: "",
    faceVerified: false,
    dataConsent: false,
  });

  const { user } = useUser()

  console.log(user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleVerificationComplete = (verified: boolean): void => {
    setUserData((prev) => ({ ...prev, faceVerified: verified }));
  };

  const handleInfo = async (data: any) => {
    try {
      if (!user) {
        toast.error("User not found");
        return;
      }

      await user.update({
        firstName: data.firstName,
        lastName: data.lastName,
      });

      if (data.username) {
        await user.update({
          username: data.username,
        });
      }

      toast.success("Info Saved Successfully");
      handleNext();
    } catch (error) {
      console.error('Update error:', error);
      toast.error(error instanceof Error ? error.message : "Failed to update information");
    }
  };

  const steps = [
    <div key="welcome" className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to CLEVERMART</h2>
      <p>
        The Ultimate Marketplace for Everything!
        Discover a smarter way to buy, sell, and trade. Refresh your wardrobe, upgrade your home, and clear out your garage without breaking the bank.
        Connect with trusted people, save money, and give preloved items a second life. CleverMart makes it
        easy to turn your clutter into cash and find great deals in your community. Start your journey today – because smart shopping starts here!
      </p>
      <Button onClick={handleNext}>Next</Button>
    </div>,

    <div key="basic-info" className="space-y-4">
      <h2 className="text-2xl font-bold">Basic Information</h2>
      <div className="space-y-2">
        <InputField
            id="firstName"
            name="firstName"
            label="First Name"
            value={userData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your First Name"
        />
        <InputField
            id="lastName"
            name="lastName"
            label="Last Name"
            value={userData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your Last Name"
        />
        <InputField
            id="username"
            name="username"
            label="Username"
            value={userData.username}
            onChange={handleInputChange}
            placeholder="Enter your Username"
        />

      </div>
      <p className="text-sm text-muted-foreground">
        Your name enhances your profile's trustworthiness.
      </p>
      <div className="space-y-2">
        <LocationInput value={userData.location} onChange={handleInputChange}/>
      </div>
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button
            disabled={!userData.firstName || !userData.lastName || !userData.location}
            onClick={() => handleInfo(userData)}
        >
          Next
        </Button>
      </div>
    </div>,

    <FaceVerification
        key="face-verification"
        onBack={handleBack}
        onNext={handleNext}
        onVerification={handleVerificationComplete}
    />,

    // Privacy and Security Step
    <div key="privacy" className="space-y-4">
      <h2 className="text-2xl font-bold">Privacy and Security</h2>
      <p>
        Your privacy and security are our top priorities. Please review our data
        handling practices.
      </p>
      <div className="space-y-2">
        <Checkbox
          id="dataConsent"
          checked={userData.dataConsent}
          onCheckedChange={(checked) =>
            setUserData({ ...userData, dataConsent: checked as boolean })
          }
        />
        <Label htmlFor="dataConsent" className="ml-2">
          I consent to CLEVERMART storing and processing my data, including face
          verification data, to enhance platform security and user trust.
        </Label>
      </div>
      <p>
        You can request the removal of your data at any time by contacting our
        support team.
      </p>
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!userData.dataConsent}>
          Next
        </Button>
      </div>
    </div>,

    // Completion Step
    <div key="completion" className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to CLEVERMART!</h2>
      {userData.faceVerified ? (
        <div className="flex items-center space-x-2 text-green-600">
          <CheckCircle />
          <span>Congratulations! You've earned the Trust Badge.</span>
        </div>
      ) : (
        <p>
          You can complete face verification later to earn your Trust Badge.
        </p>
      )}
      <p>
        Explore our marketplace, discover great deals, and start listing your
        products.
      </p>
      <h3 className="text-xl font-semibold">Popular Categories</h3>
      <div className="grid grid-cols-2 gap-4">
        {["Electronics", "Fashion", "Home & Garden", "Sports & Outdoors"].map(
          (category) => (
            <Button key={category} variant="outline" className="h-20">
              {category}
            </Button>
          )
        )}
      </div>
      <Button className="w-full" asChild>
        <Link href="/marketplace">Start Exploring</Link>
      </Button>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg mx-5">
        <div className="mb-4">
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
        {steps[step]}
      </div>
    </div>
  );
}

export default Onboarding;
