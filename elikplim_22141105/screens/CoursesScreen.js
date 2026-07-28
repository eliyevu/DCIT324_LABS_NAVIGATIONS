import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { courses } from '../data/data';

export default function CoursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enrolled Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.code}>{item.code} - {item.title}</Text>
            <Text style={styles.credits}>{item.credits} credit hours</Text>
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
  code: { fontSize: 15, fontWeight: '600' },
  credits: { fontSize: 13, color: '#666' },
});
