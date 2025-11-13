import { Stack } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    // Lock screen orientation to landscape
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
    
    // Cleanup: unlock on unmount (optional)
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
