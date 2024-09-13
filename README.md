# Nitro Benchmarks

A react-native (or actually; Expo) app that compares react-native's **Turbo Modules** vs expo's **Expo Modules** vs @mrousavy's [**Nitro Modules**](https://github.com/mrousavy/react-native-nitro).

## About

This app specifically benchmarks the time it takes to call a synchronous function and return a result back to JS.

There are two synchronous functions per module:
- `addNumbers(a: number, b: number): number`
- `addStrings(a: string, b: string): string`

For each module, I chose the recommended language for iOS - so the TurboModule is implemented in **Objective-C**, and both the Expo Module and Nitro Module are implemented in **Swift**.

The functions are run 100.000 times after a short timeout to make sure the JS VM isn't busy with any other scheduled microtasks, and the total execution time is measured with `performance.now()`.

### About Nitro

Nitro is an upcoming library/toolkit I have been working on because I hit a lot of limitations with my libraries ([react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera), [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv), [react-native-filament](https://github.com/margelo/react-native-filament), and so on).
I will use Nitro in my libraries to allow me to make them much faster than they already are, and to benefit from some fundamental differences such as it's instance-based approach. The `Frame` in VisionCamera, or `MMKV` in MMKV, or anything in Filament are all a C++ objects - I needed a better way of exposing those to JS, so I built Nitro.

I will make Nitro publicly available for everyone to build native C++, Swift or Kotlin modules with! 🔥

## Results

### iPhone 15 Pro (Release)

On my iPhone 15 Pro I got these numbers in a release build:

<table>
  <tr>
    <th></th>
    <th>ExpoModules</th>
    <th>TurboModules</th>
    <th>NitroModules</th>
  </tr>
  <tr>
    <td>100.000x <code>addNumbers(...)</code></td>
    <td>434.85</td>
    <td>115.86ms</td>
    <td><b>7.27ms</b></td>
  </tr>
  <tr>
    <td>100.000x <code>addStrings(...)</code></td>
    <td>429.53ms</td>
    <td>179.02ms</td>
    <td><b>29.94ms</b></td>
  </tr>
</table>

- For `addNumbers(...)`, Nitro Modules is **59x as fast as ExpoModules**, and **15x as fast as TurboModules** 🔥
- For `addStrings(...)`, Nitro Modules is **13x as fast as ExpoModules**, and **5x as fast as TurboModules** 🔥

---

### Mac Studio (Apple M1 Max)

On my Mac Studio (Apple M1 Max, 32GB RAM), I got these numbers in a release build ("designed for iPad"):

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

## Real-world

Note that these are just very specific benchmarks. They profile JS <-> Native function execution time (call, argument parsing, and result argument conversion).
**In an actual real world app, performance may vary.**

## Correctness

Note: I put these benchmarks together in ~1 hour. My focus is on making [Nitro Modules](https://github.com/mrousavy/react-native-nitro) as fast as possible, but also as powerful as possible, so this is where my time is dedicated at.
**If I made any mistakes in the benchmark, please let me know so I can update it asap!**

I don't intend to put Turbo or Expo modules in bad light here, they are insanely cool tools to build native modules.
