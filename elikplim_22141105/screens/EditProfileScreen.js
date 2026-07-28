import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { ProfileContext } from '../App';

export default function EditProfileScreen({ navigation, route }) {
  const { updateProfile } = useContext(ProfileContext);

  // Pre-fill the form with the profile values passed in via params.
  const passedProfile = route.params?.profile ?? {};
  const [name, setName] = useState(passedProfile.name ?? '');
  const [bio, setBio] = useState(passedProfile.bio ?? '');
  const [programme, setProgramme] = useState(passedProfile.programme ?? '');

  const handleSave = () => {
    updateProfile({ name, bio, programme });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        value={bio}
        onChangeText={setBio}
        multiline
      />

      <Text style={styles.label}>Programme</Text>
      <TextInput style={styles.input} value={programme} onChangeText={setProgramme} />

      <View style={styles.buttonWrapper}>
        <Button title="Save" onPress={handleSave} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 16, marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  multiline: { height: 80, textAlignVertical: 'top' },
  buttonWrapper: { marginTop: 30 },
});
