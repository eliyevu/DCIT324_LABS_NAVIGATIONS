import React from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';

export default function EventDetailsScreen({ navigation, route }) {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.description}>{event.description}</Text>

        <View style={styles.buttonWrapper}>
          <Button title="Back to Feed" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  date: { fontSize: 13, color: '#666', marginBottom: 16 },
  description: { fontSize: 15, lineHeight: 22 },
  buttonWrapper: { marginTop: 30, width: '50%' },
});
