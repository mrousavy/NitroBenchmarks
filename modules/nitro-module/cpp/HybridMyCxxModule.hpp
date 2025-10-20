#pragma once

#include <NitroModules/HybridObject.hpp>
#include "HybridMyCxxModuleSpec.hpp"

namespace margelo::nitro::mymodule {

class HybridMyCxxModule: public HybridMyCxxModuleSpec {
public:
  double addNumbers(double a, double b) override {
    return a + b;
  }
  std::string addStrings(const std::string& a, const std::string& b) override {
    return a + b;
  }
};

}
