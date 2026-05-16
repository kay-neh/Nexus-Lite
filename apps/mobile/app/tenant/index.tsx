import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TenantHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tenant App</Text>
      <Text style={styles.subtitle}>
        Chat-first repair reporting, rent visibility, and service updates.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Actions</Text>
        <Text style={styles.cardText}>Report a repair</Text>
        <Text style={styles.cardText}>Check my repairs</Text>
        <Text style={styles.cardText}>View rent status</Text>
      </View>

      <Link href={"/" as any} style={styles.link}>
        Back to start
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
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#A9B4C2",
    lineHeight: 22,
  },
  card: {
    marginTop: 28,
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#263244",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  cardText: {
    color: "#A9B4C2",
    fontSize: 15,
    marginBottom: 8,
  },
  link: {
    marginTop: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
});