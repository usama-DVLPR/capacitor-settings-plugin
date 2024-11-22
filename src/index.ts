import { registerPlugin } from '@capacitor/core';

import type { CapacitorSettingsPlugin } from './definitions';

const CapacitorSettings = registerPlugin<CapacitorSettingsPlugin>('CapacitorSettings', {
  web: () => import('./web').then((m) => new m.CapacitorSettingsWeb()),
});

export * from './definitions';
export { CapacitorSettings };
