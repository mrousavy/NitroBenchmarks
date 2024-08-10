//
//  HybridMyModule.swift
//  react-native-nitro-image
//
//  Created by Marc Rousavy on 10.8.2024
//

import Foundation
import UIKit
import NitroModules

/**
 * Implement `HybridMyModuleSpec` so we can expose this Swift class to JS.
 */
class HybridMyModule : HybridMyModuleSpec {
  public var hybridContext = margelo.nitro.HybridContext()
  public var memorySize: Int {
    return getSizeOf(self)
  }

  public func addNumbers(a: Double, b: Double) throws -> Double {
    return a + b
  }

  public func addStrings(a: String, b: String) throws -> String {
    return a + b
  }
}
