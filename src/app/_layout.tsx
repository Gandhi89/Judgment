import { Stack } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Updates from "expo-updates";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    // Lock screen orientation to portrait
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

    async function onFetchUpdateAsync() {
      try {
        const update = await Updates.checkForUpdateAsync();

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (error) {
        // You can also add an alert() to see the error message in case of an error when fetching updates.
        console.error(`Error fetching latest Expo update: ${error}`);
      }
    }

    // Only check for updates in production builds
    if (!__DEV__) {
      onFetchUpdateAsync();
    }
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
