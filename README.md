
# Capacitor Settings

The CapacitorSettings plugin provides an easy way to manage critical device settings and permissions for your Android app. This plugin allows you to seamlessly prompt users to adjust important settings such as battery optimization, location accuracy, and Bluetooth configurations, without needing to navigate them to the system settings page. It includes methods to request permissions, open specific system settings, and check if the settings have already been configured.

## Features

- Manage Battery Optimization settings.
- Configure Location Accuracy prompts.
- Manage Bluetooth settings.


## Platform Support

| Feature | Android   | iOS   | Web   |
| :-------- | :-------- | :-------- | :-------- |
| Battery Optimization	Prompt   |  ✅  | ❌ | ❌ |
| Bluetooth Settings Prompt   |  ✅  | ❌ | ❌ |
| Location Accuracy Prompt	  |  ✅  | ❌ | ❌ |

⚠️ **Note:** This plugin currently supports only Android. iOS and Web support are not available.





## Installation

Install the plugin using npm:

```bash
  npm install capacitor-settings
  npx cap sync
```
    
## Usage/Examples

#### Location Accuracy Prompt

```javascript
import {CapacitorSettings} from 'capacitor-settings'
import { from } from 'rxjs';

 locationAccuracy() {
  from(CapacitorSettings.locationAccuracy())
    .subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
}
```

#### Battery Optimization Prompt

```javascript
import {CapacitorSettings} from 'capacitor-settings'
import { from } from 'rxjs';

 batteryOptimization() {
  from(CapacitorSettings.setBatteryMode())
    .subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
}
```

#### Bluetooth Settings Prompt

```javascript
import {CapacitorSettings} from 'capacitor-settings'
import { from } from 'rxjs';

 bluetoothEnable() {
  from(CapacitorSettings.bluetoothEnable())
    .subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
}
```


## API

#### Methods


| Method | Description     | Platforms                |
| :-------- | :------- | :------------------------- |
| `locationAccuracy` | `Checks and prompts the user to enable high accuracy location settings.` | **Android** |
| `bluetoothEnable` | `Requests the user to enable Bluetooth if it is not already turned on.` | **Android** |
| `setBatteryMode` | `	Requests the user to disable battery optimization for the app.` | **Android** |




## Demo

[CapacitorSettings Demo](demo/video.mp4)

