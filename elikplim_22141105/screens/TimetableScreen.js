import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { timetable } from '../data/data';

export default function TimetableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Class Timetable</Text>
      <FlatList
        data={timetable}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.day}>{item.day} • {item.time}</Text>
            <Text style={styles.course}>{item.course} — {item.venue}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 20, fontWeight: 'bold', padding: 16, paddingBottom: 0 },
  list: { padding: 16 },
  item: { marginBottom: 14 },
  day: { fontSize: 15, fontWeight: '600' },
  course: { fontSize: 13, color: '#666' },
});
