// hooks/useLocation.ts
import { useState, useEffect } from "react";
import axios from "axios";

interface LocationState {
  location: string;
  isLoading: boolean;
  error: string | null;
}

export const useLocation = () => {
  const [locationState, setLocationState] = useState<LocationState>({
    location: "",
    isLoading: true,
    error: null,
  });

  const fetchUserState = async (latitude: number, longitude: number) => {
    try {
      const apiKey = `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );

      const addressComponents = response.data.results[0]?.address_components;
      const stateComponent = addressComponents?.find((component: any) =>
        component.types.includes("administrative_area_level_1")
      );
      const cityComponent = addressComponents?.find((component: any) =>
        component.types.includes("administrative_area_level_2")
      );

      const location = [
        cityComponent?.long_name || "City not found",
        stateComponent?.long_name || "State not found",
      ].join(", ");

      setLocationState({
        location,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setLocationState({
        location: "",
        isLoading: false,
        error: "Error fetching location",
      });
    }
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationState({
        location: "",
        isLoading: false,
        error: "Geolocation is not supported by this browser.",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchUserState(latitude, longitude);
      },
      (error) => {
        setLocationState({
          location: "",
          isLoading: false,
          error: "Error getting location: " + error.message,
        });
      }
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return locationState;
};
