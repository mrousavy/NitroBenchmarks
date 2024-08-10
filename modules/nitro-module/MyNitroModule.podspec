
Pod::Spec.new do |s|
  s.name         = "MyNitroModule"
  s.version      = "0.0.1"
  s.summary      = "Nitro Module example"
  s.homepage     = "https://mrousavy.com"
  s.license      = "MIT"
  s.authors      = "Marc Rousavy"

  s.platforms    = { :ios => min_ios_version_supported }
  s.source       = { :git => "https://github.com/mrousavy/react-native-nitro.git", :tag => "#{s.version}" }

  s.source_files = [
    # Implementation (Swift)
    "ios/**/*.{swift}",
    # Autolinking/Registration (Objective-C++)
    "ios/**/*.{m,mm}",
  ]

  load 'nitrogen/generated/ios/MyNitroModule+autolinking.rb'
  add_nitrogen_files(s)

  install_modules_dependencies(s)
end
