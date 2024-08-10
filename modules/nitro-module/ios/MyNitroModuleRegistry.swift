

public class MyNitroModuleRegistry {
  public static func createMyModule() -> HybridMyModuleSpecCxx {
    let myModule = HybridMyModule()
    return HybridMyModuleSpecCxx(myModule)
  }
}
