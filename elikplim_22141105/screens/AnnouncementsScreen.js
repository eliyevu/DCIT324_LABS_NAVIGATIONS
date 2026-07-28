import React from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import { announcements } from '../data/data';

export default function AnnouncementsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: { marginBottom: 18 },
  title: { fontSize: 16, fontWeight: 'bold' },
  date: { fontSize: 12, color: '#666', marginBottom: 4 },
  text: { fontSize: 14 },
});
