import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0e27",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#60a5fa",
    textShadowColor: "rgba(96, 165, 250, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: "#94a3b8",
    marginTop: 8,
    fontStyle: "italic",
    marginLeft: Dimensions.get("window").width * 0.4,
  },
  middleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 0,
  },
  input: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#1e293b",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 18,
    color: "#fff",
    borderWidth: 2,
    borderColor: "#3b82f6",
    marginBottom: 0,
  },
  divider: {
    height: 1,
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginVertical: 16,
    width: "100%",
    maxWidth: 400,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 0,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#60a5fa",
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

