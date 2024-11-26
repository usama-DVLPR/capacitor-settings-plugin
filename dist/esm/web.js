import { WebPlugin } from '@capacitor/core';
export class CapacitorSettingsWeb extends WebPlugin {
    /**
     * This method is not implemented for Web or iOS platforms.
     * It throws an error to indicate platform incompatibility.
     */
    async locationAccuracy() {
        throw new Error('CapacitorSettings: locationAccuracy is only available on Android.');
    }
    async bluetoothEnable() {
        throw new Error('CapacitorSettings: bluetoothEnable is only available on Android.');
    }
    // async batteryOptimizationSettings(): Promise<{ 
    //   status: string; 
    //   userSelection: string;
    //   message:string;
    // }>{
    //   throw new Error('CapacitorSettings: batteryOptimizationSettings is only available on Android.');
    // };
    setBatteryMode() {
        throw new Error('CapacitorSettings: setBatteryMode is only available on Android.');
    }
    ;
}
//# sourceMappingURL=web.js.map