// Import the native module. On web, it will be resolved to MyModule.web.ts
// and on native platforms to MyModule.ts
import MyModule from './src/MyModule';

export function addNumbers(a: number, b: number): number {
  return MyModule.addNumbers(a, b)
}

export function addStrings(a: string, b: string): string {
  return MyModule.addStrings(a, b)
}

