import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Nexus Lite</Text>
      <Text style={styles.subtitle}>AI-powered housing operations</Text>

      <View style={styles.actions}>
        <Link href={"/auth/login" as any} style={styles.button}>
          Continue
        </Link>
<Link href={"/tenant" as any} style={styles.secondaryButton}>
  Tenant Preview
</Link>

<Link href={"/contractor" as any} style={styles.secondaryButton}>
  Contractor Preview
</Link>

      </View>
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
  logo: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#A9B4C2",
    marginBottom: 32,
  },
  actions: {
    gap: 14,
  },
  button: {
    backgroundColor: "#3B5BDB",
    color: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 14,
    textAlign: "center",
    fontWeight: "700",
    overflow: "hidden",
  },
  secondaryButton: {
    backgroundColor: "#111827",
    color: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 14,
    textAlign: "center",
    fontWeight: "600",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#263244",
  },
});