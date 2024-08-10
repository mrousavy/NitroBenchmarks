import { StatusBar } from 'expo-status-bar';
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



export default function App() {

  testExpoModule()
  testNitroModule()
  testTurboModule()

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
