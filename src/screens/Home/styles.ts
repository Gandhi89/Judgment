import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1a1a2e",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  input: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#4a1414",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 18,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#c43c3c",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    backgroundColor: "#a32020",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#d94d4d",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
  },
});

