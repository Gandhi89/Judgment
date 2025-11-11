import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [playerName, setPlayerName] = useState("");

  const handleCreateRoom = () => {
    // TODO: Implement create room functionality
    console.log("Create room pressed", playerName);
  };

  const handleEnterRoom = () => {
    // TODO: Implement enter room functionality
    console.log("Enter room pressed", playerName);
  };

  const handlePlayOffline = () => {
    // TODO: Implement offline play functionality
    console.log("Play offline pressed", playerName);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Judgement</Text>
        <Text style={styles.subtitle}>Card Game</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Your Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Player Name"
            placeholderTextColor="#999"
            value={playerName}
            onChangeText={setPlayerName}
            autoCapitalize="words"
            maxLength={20}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.createRoomButton,
              !playerName.trim() && styles.buttonDisabled,
            ]}
            onPress={handleCreateRoom}
            disabled={!playerName.trim()}
          >
            <Text style={styles.buttonText}>Create Room</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              styles.enterRoomButton,
              !playerName.trim() && styles.buttonDisabled,
            ]}
            onPress={handleEnterRoom}
            disabled={!playerName.trim()}
          >
            <Text style={styles.buttonText}>Enter Room</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              styles.playOfflineButton,
              !playerName.trim() && styles.buttonDisabled,
            ]}
            onPress={handlePlayOffline}
            disabled={!playerName.trim()}
          >
            <Text style={styles.buttonText}>Play Offline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 24,
    color: "#a0a0a0",
    marginBottom: 60,
    fontWeight: "300",
  },
  inputContainer: {
    width: "100%",
    maxWidth: 400,
    marginBottom: 50,
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 12,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#16213e",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 18,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#0f3460",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 400,
    gap: 16,
  },
  button: {
    backgroundColor: "#0f3460",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#16213e",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  createRoomButton: {
    backgroundColor: "#0f3460",
    borderColor: "#1a5490",
  },
  enterRoomButton: {
    backgroundColor: "#0f3460",
    borderColor: "#1a5490",
  },
  playOfflineButton: {
    backgroundColor: "#0f3460",
    borderColor: "#1a5490",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
