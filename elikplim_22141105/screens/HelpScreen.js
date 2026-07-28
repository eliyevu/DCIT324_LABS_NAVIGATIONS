import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { faqs } from '../data/data';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={faqs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.question}>Q: {item.question}</Text>
            <Text style={styles.answer}>A: {item.answer}</Text>
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
  question: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  answer: { fontSize: 14 },
});
