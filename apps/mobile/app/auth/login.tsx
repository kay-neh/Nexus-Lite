import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subtitle}>Access your Nexus Lite account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#7B8794"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#7B8794"
        secureTextEntry
      />

<Link href={"/tenant" as any} style={styles.button}>
  Sign in as Tenant
</Link>

<Link href={"/contractor" as any} style={styles.secondaryButton}>
  Sign in as Contractor
</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#07111F",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#A9B4C2",
    marginBottom: 28,
  },
  input: {
    backgroundColor: "#111827",
    borderColor: "#263244",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    color: "#FFFFFF",
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#3B5BDB",
    color: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 14,
    textAlign: "center",
    fontWeight: "700",
    overflow: "hidden",
    marginTop: 8,
  },
  secondaryButton: {
    color: "#FFFFFF",
    paddingVertical: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});