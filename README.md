# Nitro Benchmarks

A react-native (or actually; Expo) app that compares react-native's **Turbo Modules** vs expo's **Expo Modules** vs @mrousavy's **Nitro Modules**.

## About

This app specifically benchmarks the time it takes to call a synchronous function and return a result back to JS.

There are two synchronous functions per module:
- `addNumbers(a: number, b: number): number`
- `addStrings(a: string, b: string): string`

For each module, I chose the recommended language for iOS - so the TurboModule is implemented in **Objective-C**, and both the Expo Module and Nitro Module are implemented in **Swift**.

## Results

The functions are run 100.000 times, and the total execution time is measured with `performance.now()`.
On an iPhone 15 Pro (in RELEASE), I got these numbers:

<table>
  <tr>
    <th></th>
    <th>ExpoModules</th>
    <th>TurboModules</th>
    <th>NitroModules</th>
  </tr>
  <tr>
    <td>100.000x <code>addNumbers(...)</code></td>
    <td>764.31ms</td>
    <td>195.12ms</td>
    <td><b>42.32ms</b></td>
  </tr>
  <tr>
    <td>100.000x <code>addStrings(...)</code></td>
    <td>773.00ms</td>
    <td>308.65ms</td>
    <td><b>138.43ms</b></td>
  </tr>
</table>

## Correctness

Note: I put these benchmarks together in ~1 hour. My focus is on making [Nitro Modules](https://github.com/mrousavy/react-native-nitro) as fast as possible, but also as powerful as possible, so this is where my time is dedicated at.
**If I made any mistakes in the benchmark, please let me know so I can update it asap!**

I don't intend to put Turbo or Expo modules in bad light here, they are insanely cool tools to build native modules.
