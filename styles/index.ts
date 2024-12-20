import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1A1A40", // Fundo roxo escuro
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#E63946", // Vermelho vibrante
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#E5E5E5", // Cinza claro
    marginBottom: 20,
  },
  input: {
    width: "100%",
    minHeight: 40,
    backgroundColor: "#F4F4F4", // Branco gelo
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#6C757D", // Cinza neutro
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2DC653", // Verde neon
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: "100%",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 18,
  },
  card: {
    borderWidth: 2,
    backgroundColor: "#3D348B", // Roxo vibrante
    borderColor: "#2DC653", // Borda verde neon
    marginTop: 30,
    width: "100%",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFDE03", // Amarelo neon
    marginBottom: 10,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardText: {
    fontSize: 16,
    color: "#FFFFFF", // Branco
    lineHeight: 22,
  },
});

export default styles;
