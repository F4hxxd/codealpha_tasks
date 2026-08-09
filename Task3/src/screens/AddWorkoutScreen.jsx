import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles/AddWorkoutScreen.styles';

const AddWorkoutScreen = ({ onAddWorkout }) => {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleAdd = () => {
    if (!type.trim() || !duration.trim() || !calories.trim()) {
      Alert.alert('Missing Fields', 'Please fill in all inputs before saving.');
      return;
    }

    const newWorkout = {
      id: Date.now().toString(),
      type: type.trim(),
      duration: parseInt(duration, 10),
      calories: parseInt(calories, 10),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    };

    onAddWorkout(newWorkout);

    setType('');
    setDuration('');
    setCalories('');
    Alert.alert('Success', 'Workout logged successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Workout</Text>

      <Text style={styles.label}>Exercise Type</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Running, Cycling, Gym"
        placeholderTextColor="#555555"
        value={type}
        onChangeText={(text) => setType(text)}
        autoCapitalize="words"
      />

      <Text style={styles.label}>Duration (minutes)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 45"
        placeholderTextColor="#555555"
        value={duration}
        onChangeText={(text) => setDuration(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Calories Burned (kcal)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 300"
        placeholderTextColor="#555555"
        value={calories}
        onChangeText={(text) => setCalories(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleAdd}>
        <Text style={styles.buttonText}>Save Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWorkoutScreen;