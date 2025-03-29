import SettingsLayout from "../layout/SettingsLayout";
import Subscription from "./Subscription";
import Profiles from "./Profiles";
import Devices from "./Devices";

export default function Settings() {
  const renderSection = (activeSection) => {
    switch (activeSection) {
      case "profiles":
        return <Profiles />;
      case "devices":
        return <Devices />;
      default:
        return <Subscription />;
    }
  };

  return <SettingsLayout>{renderSection}</SettingsLayout>;
}
