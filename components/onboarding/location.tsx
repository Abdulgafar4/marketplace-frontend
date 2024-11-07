import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLocation } from "@/lib/hooks/useLocation";
import { useEffect } from "react";

interface LocationInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ value, onChange }) => {
  const { location, isLoading, error } = useLocation();

  useEffect(() => {
    if (location && !value) {
      const syntheticEvent = {
        target: {
          name: "location",
          value: location,
        },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(syntheticEvent);
    }
  }, [location, value, onChange]);

  return (
    <div className="space-y-2">
      <Label htmlFor="location">Location</Label>
      <Input
        id="location"
        name="location"
        value={value}
        onChange={onChange}
        placeholder={isLoading ? "Getting location..." : "Enter your location"}
        disabled
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      <p className="text-sm text-muted-foreground">
        Your location helps tailor product listings based on proximity.
      </p>
    </div>
  );
};

export default LocationInput;
