"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox";
import { Camera, CheckCircle } from "lucide-react";
import Link from "next/link";

function Onboarding() {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    location: "",
    faceVerified: false,
    dataConsent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFaceVerification = () => {
    // Simulating face verification process
    setTimeout(() => {
      setUserData({ ...userData, faceVerified: true });
      handleNext();
    }, 2000);
  };

  const steps = [
    // Welcome Step
    <div key="welcome" className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to CLEVERMART</h2>
      <p>
        Join our trusted community of buyers and sellers. At CLEVERMART, we
        prioritize safety, trust, and community values.
      </p>
      <Button onClick={handleNext}>Next</Button>
    </div>,

    // Basic Information Step
    <div key="basic-info" className="space-y-4">
      <h2 className="text-2xl font-bold">Basic Information</h2>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
        />
        <p className="text-sm text-muted-foreground">
          Your name enhances your profile's trustworthiness.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={userData.location}
          onChange={handleInputChange}
          placeholder="Enter your location"
        />
        <p className="text-sm text-muted-foreground">
          Your location helps tailor product listings based on proximity.
        </p>
      </div>
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!userData.name || !userData.location}
        >
          Next
        </Button>
      </div>
    </div>,

    // Face Verification Step
    <div key="face-verification" className="space-y-4">
      <h2 className="text-2xl font-bold">Face Verification</h2>
      <p>
        Complete a quick face verification to earn your Trust Badge and build
        credibility with other users.
      </p>
      <div className="flex justify-center">
        <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
          <Camera size={64} />
        </div>
      </div>
      <Button onClick={handleFaceVerification} className="w-full">
        Start Verification
      </Button>
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <Button onClick={handleNext}>Skip for now</Button>
      </div>
    </div>,

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
