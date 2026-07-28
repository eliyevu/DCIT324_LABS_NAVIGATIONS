import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.appName}>Campus Connect</Text>
        <Text style={styles.description}>
          A simple student app for announcements, courses, timetable, and campus news.
        </Text>

        <Text style={styles.label}>Developed by</Text>
        <Text style={styles.value}>Elikplim Yevu</Text>

        <Text style={styles.label}>Student ID</Text>
        <Text style={styles.value}>22141105</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  appName: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 15, marginBottom: 24 },
  label: { fontSize: 13, color: '#666', marginTop: 12 },
  value: { fontSize: 16, fontWeight: '600' },
});