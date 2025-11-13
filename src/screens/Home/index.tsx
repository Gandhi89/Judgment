import { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const HomeScreen = () => {
  const [playerName, setPlayerName] = useState("");

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Judgement</Text>
          <Text style={styles.subtitle}>card game</Text>
        </View>
        
        <View style={styles.middleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            placeholderTextColor="#a0a0a0"
            value={playerName}
            onChangeText={setPlayerName}
            autoCapitalize="words"
            maxLength={20}
          />
          <View style={styles.divider} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, !playerName.trim() && styles.buttonDisabled]}
              disabled={!playerName.trim()}
            >
              <Text style={styles.buttonText}>Create Room</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, !playerName.trim() && styles.buttonDisabled]}
              disabled={!playerName.trim()}
            >
              <Text style={styles.buttonText}>Enter Room</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, !playerName.trim() && styles.buttonDisabled]}
              disabled={!playerName.trim()}
            >
              <Text style={styles.buttonText}>Play Offline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

