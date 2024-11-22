export interface CapacitorSettingsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
