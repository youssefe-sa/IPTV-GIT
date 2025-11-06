import { Tv, Smartphone, Box, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import React from "react";
const InstallationTutorial = () => {
  const [selectedDevice, setSelectedDevice] = useState("smart-tv");
  const devices = [{
    id: "smart-tv",
    name: "Smart TV",
    icon: Tv
  }, {
    id: "firestick",
    name: "Firestick",
    icon: Monitor
  }, {
    id: "android-box",
    name: "Android Box",
    icon: Smartphone
  }, {
    id: "mag-box",
    name: "MAG Box",
    icon: Box
  }];
  const installationSteps = {
    "smart-tv": [
      "📺 Setup Guide for Samsung / LG Smart TV",
      "For Samsung Smart TV",
      "1. Turn on your Samsung Smart TV.",
      "2. Press the Smart Hub button (or Home button depending on model) on the remote.",
      "3. Go to the Apps section or Samsung App Store.",
      "4. Search for 'IPTV Smarters Pro' or 'Smarters Player'.",
      "5. Install the app.",
      "6. Once installed, open the app.",
      "7. Select 'Add New User'.",
      "8. Enter the login details from your IPTV provider (Username, Password, Server URL).",
      "9. Click 'Add User' to finish.",
      "",
      "For LG Smart TV (webOS)",
      "1. Turn on your LG Smart TV.",
      "2. Press the Home button on the remote.",
      "3. Open the LG Content Store.",
      "4. Search for 'IPTV Smarters Pro' or 'Smarters Player Lite'.",
      "5. Install the app and open it.",
      "6. Choose 'Login with Xtream Codes API' (or similar) inside the app.",
      "7. Enter your provider's details (Username, Password, Server URL).",
      "8. Click 'Add User' and begin streaming."
    ],
    "firestick": [
      "🔧 Step 1: Install Downloader App",
      "1. From your Firestick home screen, go to Find",
      "2. Click Search",
      "3. Type 'Downloader' in the search box",
      "4. Select and install the Downloader app from the Amazon Appstore",
      "5. Once installed, go to Settings > My Fire TV > Developer Options",
      "6. If 'Developer Options' doesn't appear, go to Settings > My Fire TV > About and press the center button 7 times",
      "7. Select 'Install Unknown Apps' and turn ON the option for Downloader",
      "",
      "📦 Step 2: Install IPTV Smarters Pro",
      "1. Open the Downloader app",
      "2. In the URL field, type: https://www.iptvsmarters.com/iptv-smarters-5.0.apk",
      "   Or use the short code: 6468112",
      "3. Click Go to download the APK",
      "4. Once downloaded, click Install",
      "5. After installation, click Done (not Open)",
      "6. Delete the APK file when prompted to free up space",
      "",
      "▶️ Step 3: Set Up IPTV Smarters Pro",
      "1. Go to Apps & Channels on your Firestick",
      "2. Open IPTV Smarters Pro",
      "3. Accept the Terms of Use",
      "4. Click 'Add New User' and select your login method",
      "5. Enter your credentials (Username, Password, Server URL)",
      "6. Click 'Add User' and select your profile to start streaming"
    ],
    "android-box": [
      "✅ On Android device (phone or tablet)",
      "1. On your Android device, open the Google Play Store.",
      "2. Search for the app 'IPTV Smarters Pro' (or a similar IPTV player) and install it.",
      "3. Once installed, open the IPTV Smarters Pro app.",
      "4. Accept the 'Terms of Use' (if prompted).",
      "5. Tap 'Add New User' (or similar option).",
      "6. Choose the login method your provider gave you:",
      "   • 'Load your playlist or file/URL' (for M3U link)",
      "   • 'Login with Xtream Codes API' (username, password, server URL)",
      "7. Enter the details provided by your IPTV provider:",
      "   • If M3U: paste the URL link.",
      "   • If Xtream: enter server URL, username, password.",
      "8. Tap 'Add User' or 'Login'.",
      "9. After login, the app will load the channel list, VOD library, etc.",
      "10. Select and play a channel to test.",
      "",
      "⚙️ For better performance:",
      "• Use Wi-Fi (5GHz) or wired connection for better stability.",
      "• In app settings, you can:",
      "  • Choose External Player (like VLC)",
      "  • Adjust video buffer size",
      "  • Select optimal resolution",
      "• Consider using a VPN if required by your region.",
      "",
      "📱 On iOS device (iPhone or iPad)",
      "1. Open the App Store.",
      "2. Search for 'IPTV Smarters' or a compatible IPTV player.",
      "3. Install and open the app.",
      "4. Follow the same setup steps as above."
    ],
    "mag-box": [
      "✅ Step-by-Step Setup",
      "1. Turn on your MAG box and let it load to the main typical portal screen.",
      "2. On your remote, press the 'SETUP / SET' (or similar) button to open settings.",
      "3. Navigate to System Settings → Servers (or similar).",
      "4. Select 'Portals' (or 'Portal' menu).",
      "5. In the 'Portal 1 Name' field, enter a name you choose (for example 'IPTV').",
      "6. In the 'Portal 1 URL' field, enter your provider's portal URL exactly (include http:// if provided).",
      "7. After entering the details, press OK to save.",
      "8. Exit the settings (press EXIT twice) and restart the portal — or unplug the box for ~30 seconds and plug back in.",
      "9. Once restarted, the MAG box should connect to the portal and load your IPTV channels, menu, VOD, etc.",
      "",
      "⚙️ Troubleshooting & Tips",
      "• Ensure your internet connection is stable.",
      "• Double-check the portal URL for any typos.",
      "• If channels don't load, try restarting your router and MAG box.",
      "• For better performance, use a wired Ethernet connection if possible.",
      "• Contact support if you continue to experience issues."
    ]
  };
  
  return (
    <section id="installation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
            Effortlessly Set Up IPTV On Any Device
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to get started
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-3 mb-12 px-2">
            {devices.map((device, index) => <div key={device.id} className="h-full">
                <Button variant={selectedDevice === device.id ? "hero" : "outline"} size="lg" onClick={() => setSelectedDevice(device.id)} className="animate-fade-in w-full h-full flex items-center justify-center sm:justify-start p-2 sm:px-4" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <device.icon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-center sm:text-left">{device.name}</span>
                </Button>
              </div>)}
          </div>

          <div className="bg-card rounded-xl shadow-lg p-8 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {devices.find(d => d.id === selectedDevice)?.name} Installation Steps
            </h3>
            <div className="grid gap-4">
              {installationSteps[selectedDevice as keyof typeof installationSteps].map((step, index) => <div key={index} className="flex gap-4 items-start animate-fade-in" style={{
              animationDelay: `${index * 0.05}s`
            }}>
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InstallationTutorial;