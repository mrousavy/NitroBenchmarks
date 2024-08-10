import { NitroModules } from "react-native-nitro-modules";
import { MyModule } from "./specs/MyModule.nitro";

export const MyNitroModule = NitroModules.get<MyModule>('MyModule')
