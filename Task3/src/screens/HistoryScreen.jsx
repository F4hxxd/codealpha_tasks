import React from 'react';
import { View, Text, FlatList } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import styles from '../../styles/HistoryScreen.styles';

const HistoryScreen = ({ workouts, onDeleteWorkout }) => {
  const renderItem = ({ item }) => (
    <WorkoutCard workout={item} onDelete={onDeleteWorkout} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout History</Text>
      {workouts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No workouts recorded yet.</Text>
        </View>
      ) : (
        <FlatList
          data={workouts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

export default HistoryScreen;