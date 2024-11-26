export interface CapacitorSettingsPlugin {
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
