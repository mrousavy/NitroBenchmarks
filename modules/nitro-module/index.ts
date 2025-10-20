import { NitroModules } from "react-native-nitro-modules";
import { MyModule, MyCxxModule } from "./specs/MyModule.nitro";

export const MyNitroModule = NitroModules.get<MyModule>('MyModule')
export const MyCxxNitroModule = NitroModules.get<MyCxxModule>('MyCxxModule')
