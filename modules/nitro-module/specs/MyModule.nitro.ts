import { HybridObject } from "react-native-nitro-modules";

export interface MyModule extends HybridObject<{ ios: 'swift' }> {
  addNumbers(a: number, b: number): number
  addStrings(a: string, b: string): string
}
