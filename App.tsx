import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RootNavigation } from './src/navigation/RootNavigation';
import { Start } from './src/screens/Start';

export default function App() {
  return (
    <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
