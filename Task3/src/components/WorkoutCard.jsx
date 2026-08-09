import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/WorkoutCard.styles';

const WorkoutCard = ({ workout, onDelete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.type}>{workout.type}</Text>
        <Text style={styles.date}>{workout.date}</Text>
      </View>
      <View style={styles.detailsRow}>
        <Text style={styles.detailText}>⏱ {workout.duration} mins</Text>
        <Text style={styles.detailText}>🔥 {workout.calories} kcal</Text>
      </View>
      {onDelete ? (
        <TouchableOpacity 
          style={styles.deleteButton} 
          activeOpacity={0.7}
          onPress={() => onDelete(workout.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default WorkoutCard;