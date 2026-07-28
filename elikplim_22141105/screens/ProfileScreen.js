import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ProfileContext } from '../App';

export default function ProfileScreen({ navigation }) {
  const { profile } = useContext(ProfileContext);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Index Number</Text>
          <Text style={styles.value}>{profile.indexNumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Programme</Text>
          <Text style={styles.value}>{profile.programme}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Level</Text>
          <Text style={styles.value}>{profile.level}</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Edit Profile"
            onPress={() => navigation.navigate('EditProfile', { profile })}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  bio: { fontSize: 14, color: '#444', marginBottom: 20 },
  row: { marginBottom: 12 },
  label: { fontSize: 12, color: '#666' },
  value: { fontSize: 16, fontWeight: '600' },
  buttonWrapper: { marginTop: 24, width: '60%' },
});
