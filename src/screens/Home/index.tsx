import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const HomeScreen = () => {
  const [playerName, setPlayerName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Judgement</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        placeholderTextColor="#f7caca"
        value={playerName}
        onChangeText={setPlayerName}
        autoCapitalize="words"
        maxLength={20}
      />
      
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
  );
};

