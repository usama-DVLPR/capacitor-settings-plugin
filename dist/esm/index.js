import { registerPlugin } from '@capacitor/core';
const CapacitorSettings = registerPlugin('CapacitorSettings', {
    web: () => import('./web').then((m) => new m.CapacitorSettingsWeb()),
});
export * from './definitions';
export { CapacitorSettings };
//# sourceMappingURL=index.js.map