//
//  MyNitroModuleOnLoad.mm
//  NitroImage
//
//  Created by Marc Rousavy on 22.07.24.
//

#import "HybridMyModuleSpecSwift.hpp"
#import <Foundation/Foundation.h>
#import <NitroModules/HybridObjectRegistry.hpp>

namespace MyNitroModule {
class MyNitroModuleRegistry;
} // namespace MyNitroModule

#import "MyNitroModule-Swift.h"

@interface MyNitroModuleOnLoad : NSObject
@end

@implementation MyNitroModuleOnLoad

using namespace margelo::nitro;

+ (void)load {
  HybridObjectRegistry::registerHybridObjectConstructor("MyModule", []() -> std::shared_ptr<HybridObject> {
    auto myModule = MyNitroModule::MyNitroModuleRegistry::createMyModule();
    return std::make_shared<mymodule::HybridMyModuleSpecSwift>(myModule);
  });
}

@end
