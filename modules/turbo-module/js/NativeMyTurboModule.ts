import { TurboModule, TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  addNumbers(a: number, b: number): number
  addStrings(a: string, b: string): string
}

export default TurboModuleRegistry.get<Spec>('MyTurboModule') as Spec | null
