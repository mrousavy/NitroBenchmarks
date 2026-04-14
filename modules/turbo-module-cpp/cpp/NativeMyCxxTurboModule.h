#pragma once

#if __has_include(<React-Codegen/MyCxxTurboModuleJSI.h>)
#include <React-Codegen/MyCxxTurboModuleJSI.h>
#endif

#include <memory>
#include <string>

namespace facebook::react {

class NativeMyCxxTurboModule
    : public NativeMyCxxTurboModuleCxxSpec<NativeMyCxxTurboModule> {
 public:
  NativeMyCxxTurboModule(std::shared_ptr<CallInvoker> jsInvoker);

  double addNumbers(jsi::Runtime& rt, double a, double b);
  std::string addStrings(jsi::Runtime& rt, std::string a, std::string b);
};

} // namespace facebook::react
