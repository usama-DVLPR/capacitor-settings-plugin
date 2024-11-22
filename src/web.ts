import { WebPlugin } from '@capacitor/core';

import type { CapacitorSettingsPlugin } from './definitions';

export class CapacitorSettingsWeb extends WebPlugin implements CapacitorSettingsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
