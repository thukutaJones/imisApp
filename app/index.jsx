import { WebView } from "react-native-webview";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";

export default function App() {
  const webViewRef = useRef(null);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <WebView
          ref={webViewRef}
          style={styles.webView}
          source={{ uri: "https://sms.mzuni.ac.mw" }}
        />
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  webView: {
    flex: 1,
  },
});
