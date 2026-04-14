#include "NativeMyCxxTurboModule.h"

namespace facebook::react {

NativeMyCxxTurboModule::NativeMyCxxTurboModule(
    std::shared_ptr<CallInvoker> jsInvoker)
    : NativeMyCxxTurboModuleCxxSpec(std::move(jsInvoker)) {}

double NativeMyCxxTurboModule::addNumbers(jsi::Runtime& rt, double a, double b) {
  return a + b;
}

std::string NativeMyCxxTurboModule::addStrings(
    jsi::Runtime& rt, std::string a, std::string b) {
  return a + b;
}

} // namespace facebook::react
