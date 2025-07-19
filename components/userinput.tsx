import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface User {
  name: string;
  age: string;
  email: string;
}

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const validateEmail = (email: string) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };
  const handleClearList = () => {
    setUsers([]);
  };
  const handleAddUser = () => {
    if (!name || !age || !email) {
      Alert.alert('Validation Error', 'All fields are required!');
      return;
    }
    if (isNaN(Number(age))) {
      Alert.alert('Validation Error', 'Age must be a number!');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Invalid email format!');
      return;
    }

    const newUser: User = { name, age, email };
    setUsers([...users, newUser]);
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.buttonContainer}>
        <Button title="Add User" onPress={handleAddUser} />
        <Button title="Clear List" onPress={handleClearList} color='red' />
        
      </View>

      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userText}>Name: {item.name}</Text>
            <Text style={styles.userText}>Age: {item.age}</Text>
            <Text style={styles.userText}>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
     flexDirection: 'row',
    justifyContent: "space-between"
  },
  userItem: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  userText: {
    fontSize: 16,
  },
});

export default UserForm;
