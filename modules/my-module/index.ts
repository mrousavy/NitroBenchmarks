// Import the native module. On web, it will be resolved to MyModule.web.ts
// and on native platforms to MyModule.ts
import NativeMyModule from './src/MyModule';

export const MyExpoModule = NativeMyModule
