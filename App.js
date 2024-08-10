import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyExpoModule } from './modules/my-module';
import { MyNitroModule } from './modules/nitro-module';
import { MyTurboModule } from './modules/turbo-module/js'

function testExpoModule() {
  MyExpoModule.addNumbers(5, 13)
  MyExpoModule.addStrings('hello ', 'world')
}
function testNitroModule() {
  MyNitroModule.addNumbers(5, 13)
  MyNitroModule.addStrings('hello ', 'world')
}
function testTurboModule() {
  MyTurboModule.addNumbers(5, 13)
  MyTurboModule.addStrings('hello ', 'world')
}

const runs = 100_000

function runNumberBenchmark() {
  console.log('--------- BEGINNING NUMBER BENCHMARKS ---------')
  let expoTime = 0
  {
    console.log(`Starting ExpoModule benchmark...`)
    const start = performance.now()
    let num = 0
    for (let i = 0; i < runs; i++) {
      num = MyExpoModule.addNumbers(num, 5)
    }
    const end = performance.now()
    expoTime = (end - start).toFixed(2)
    console.log(`ExpoModule took ${expoTime}ms to run addNumbers(...) ${runs}x!`)
  }
  let turboTime = 0
  {
    console.log(`Starting TurboModule benchmark...`)
    const start = performance.now()
    let num = 0
    for (let i = 0; i < runs; i++) {
      num = MyTurboModule.addNumbers(num, 5)
    }
    const end = performance.now()
    turboTime = (end - start).toFixed(2)
    console.log(`TurboModule took ${turboTime}ms to run addNumbers(...) ${runs}x!`)
  }
  let nitroTime = 0
  {
    console.log(`Starting NitroModule benchmark...`)
    const start = performance.now()
    let num = 0
    for (let i = 0; i < runs; i++) {
      num = MyNitroModule.addNumbers(num, 5)
    }
    const end = performance.now()
    nitroTime = (end - start).toFixed(2)
    console.log(`NitroModule took ${nitroTime}ms to run addNumbers(...) ${runs}x!`)
  }
  console.log('--------- FINISHED NUMBER BENCHMARKS! ---------')
  return { expoTime, turboTime, nitroTime }
}

function runStringsBenchmark() {
  console.log('--------- BEGINNING STRING BENCHMARKS ---------')
  let expoTime = 0
  {
    console.log(`Starting ExpoModule benchmark...`)
    const start = performance.now()
    for (let i = 0; i < runs; i++) {
      const x = MyExpoModule.addStrings('hello ', 'world')
    }
    const end = performance.now()
    expoTime = (end - start).toFixed(2)
    console.log(`ExpoModule took ${expoTime}ms to run addNumbers(...) ${runs}x!`)
  }
  let turboTime = 0
  {
    console.log(`Starting TurboModule benchmark...`)
    const start = performance.now()
    for (let i = 0; i < runs; i++) {
      const x = MyTurboModule.addStrings('hello ', 'world')
    }
    const end = performance.now()
    turboTime = (end - start).toFixed(2)
    console.log(`TurboModule took ${turboTime}ms to run addStrings(...) ${runs}x!`)
  }
  let nitroTime = 0
  {
    console.log(`Starting NitroModule benchmark...`)
    const start = performance.now()
    for (let i = 0; i < runs; i++) {
      const x = MyNitroModule.addStrings('hello ', 'world')
    }
    const end = performance.now()
    nitroTime = (end - start).toFixed(2)
    console.log(`NitroModule took ${nitroTime}ms to run addStrings(...) ${runs}x!`)
  }
  console.log('--------- FINISHED STRING BENCHMARKS! ---------')
  return { expoTime, turboTime, nitroTime }
}


export default function App() {
  const [numberTimes, setNumberTimes] = useState()
  const [stringTimes, setStringTimes] = useState()

  useEffect(() => {
    setTimeout(() => {
      const times = runNumberBenchmark()
      setNumberTimes(times)
    }, 3000)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      const times = runStringsBenchmark()
      setStringTimes(times)
    }, 6000)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', size: 24 }}>ExpoModules vs TurboModules vs NitroModules</Text>

      <View style={{ height: 50 }} />

      <Text style={{ fontWeight: 'bold', size: 24 }}>Calling addNumbers(...) 100.000x</Text>
      <View style={{ alignItems: 'flex-end' }}>
        <Text>
          ExpoModule.addNumbers(...) took <Text style={{ fontWeight: 'bold' }}>{numberTimes?.expoTime}ms</Text>
        </Text>
        <Text>
          TurboModule.addNumbers(...) took <Text style={{ fontWeight: 'bold' }}>{numberTimes?.turboTime}ms</Text>
        </Text>
        <Text>
          NitroModule.addNumbers(...) took <Text style={{ fontWeight: 'bold' }}>{numberTimes?.nitroTime}ms</Text>
        </Text>
      </View>

      <View style={{ height: 50 }} />

      <Text style={{ fontWeight: 'bold', size: 24 }}>Calling addStrings(...) 100.000x</Text>
      <View style={{ alignItems: 'flex-end' }}>
        <Text>
          ExpoModule.addStrings(...) took <Text style={{ fontWeight: 'bold' }}>{stringTimes?.expoTime}ms</Text>
        </Text>
        <Text>
          TurboModule.addStrings(...) took <Text style={{ fontWeight: 'bold' }}>{stringTimes?.turboTime}ms</Text>
        </Text>
        <Text>
          NitroModule.addStrings(...) took <Text style={{ fontWeight: 'bold' }}>{stringTimes?.nitroTime}ms</Text>
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
