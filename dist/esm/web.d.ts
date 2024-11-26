import { WebPlugin } from '@capacitor/core';
import type { CapacitorSettingsPlugin } from './definitions';
export declare class CapacitorSettingsWeb extends WebPlugin implements CapacitorSettingsPlugin {
    /**
     * This method is not implemented for Web or iOS platforms.
     * It throws an error to indicate platform incompatibility.
     */
    locationAccuracy(): Promise<{
        status: string;
        userSelection: string;
        message: string;
    }>;
    bluetoothEnable(): Promise<{
        status: string;
        userSelection: string;
        message: string;
    }>;
    setBatteryMode(): Promise<{
        status: string;
        userSelection: string;
        message: string;
    }>;
}
