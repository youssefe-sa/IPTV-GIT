import { Tv, Smartphone, Box, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const InstallationTutorial = () => {
  const [selectedDevice, setSelectedDevice] = useState("smart-tv");

  const devices = [
    { id: "smart-tv", name: "Smart TV", icon: Tv },
    { id: "firestick", name: "Firestick", icon: Monitor },
    { id: "android-box", name: "Android Box", icon: Smartphone },
    { id: "mag-box", name: "MAG Box", icon: Box },
  ];

  const installationSteps = {
    "smart-tv": [
      "Turn on your Smart TV and connect to the internet",
      "Open the app store on your Smart TV",
      "Search for 'IPTV Player' or your preferred IPTV app",
      "Download and install the application",
      "Open the app and select 'Add New Playlist'",
      "Enter the M3U URL provided in your welcome email",
      "Save the settings and wait for channels to load",
      "Start enjoying your IPTV service",
    ],
    "firestick": [
      "Go to Settings on your Firestick",
      "Select 'My Fire TV' then 'Developer Options'",
      "Enable 'Apps from Unknown Sources'",
      "Return to home and search for 'Downloader'",
      "Install and open the Downloader app",
      "Enter the IPTV app URL provided",
      "Install the IPTV application",
      "Open the app and enter your credentials",
      "Load your playlist and start watching",
    ],
    "android-box": [
      "Connect your Android Box to the internet",
      "Open Google Play Store",
      "Search for 'IPTV Smarters Pro' or similar app",
      "Download and install the application",
      "Open the app and select login method",
      "Enter your credentials from the welcome email",
      "Select 'Add User' and fill in the details",
      "Save and load the playlist",
      "Navigate through channels and enjoy",
    ],
    "mag-box": [
      "Connect your MAG Box to TV and internet",
      "Go to System Settings",
      "Navigate to Servers and select 'Portals'",
      "Click on 'Portal 1' or create a new portal",
      "Enter the portal URL from your email",
      "Save the settings",
      "Restart your MAG Box",
      "The channels will load automatically",
    ],
  };

  return (
    <section id="installation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Effortlessly Set Up IPTV On Any Device
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to get started
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-3 mb-12 px-2">
            {devices.map((device, index) => (
              <div key={device.id} className="h-full">
                <Button
                  variant={selectedDevice === device.id ? "hero" : "outline"}
                  size="lg"
                  onClick={() => setSelectedDevice(device.id)}
                  className="animate-fade-in w-full h-full flex items-center justify-center sm:justify-start p-2 sm:px-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <device.icon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-center sm:text-left">{device.name}</span>
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl shadow-lg p-8 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {devices.find(d => d.id === selectedDevice)?.name} Installation Steps
            </h3>
            <div className="grid gap-4">
              {installationSteps[selectedDevice as keyof typeof installationSteps].map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationTutorial;
