///
/// HybridMyModuleSpec.cpp
/// Sat Aug 10 2024
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/react-native-nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#include "HybridMyModuleSpec.hpp"

namespace margelo::nitro::mymodule {

  void HybridMyModuleSpec::loadHybridMethods() {
    // load base methods/properties
    HybridObject::loadHybridMethods();
    // load custom methods/properties
    registerHybrids(this, [](Prototype& prototype) {
      prototype.registerHybridMethod("addNumbers", &HybridMyModuleSpec::addNumbers);
      prototype.registerHybridMethod("addStrings", &HybridMyModuleSpec::addStrings);
    });
  }

} // namespace margelo::nitro::mymodule
