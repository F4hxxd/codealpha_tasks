import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import styles from '../../styles/DashboardScreen.styles';

const DashboardScreen = ({ workouts, goals }) => {
  const totalCalories = workouts.reduce((sum, item) => sum + Number(item.calories || 0), 0);
  const totalMinutes = workouts.reduce((sum, item) => sum + Number(item.duration || 0), 0);
  const estimatedSteps = Math.round(totalMinutes * 110);

  const weeklyWorkoutsCount = workouts.length;
  const weeklyCalories = totalCalories;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Daily Overview</Text>

      <View style={styles.statsGrid}>
        <StatCard title="Steps" value={estimatedSteps} unit="steps" goal={goals.steps} />
        <StatCard title="Burned" value={totalCalories} unit="kcal" goal={goals.calories} />
        <StatCard title="Active" value={totalMinutes} unit="min" goal={goals.duration} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Goal Progress</Text>
        <ProgressBar label="Daily Steps" current={estimatedSteps} target={goals.steps} unit="steps" />
        <ProgressBar label="Calories Burned" current={totalCalories} target={goals.calories} unit="kcal" />
        <ProgressBar label="Workout Time" current={totalMinutes} target={goals.duration} unit="min" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weekly Summary</Text>
        <View style={styles.summaryBox}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>{weeklyWorkoutsCount}</Text>
            <Text style={styles.summaryLabel}>Workouts</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>{weeklyCalories}</Text>
            <Text style={styles.summaryLabel}>Total Calories</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>{totalMinutes}</Text>
            <Text style={styles.summaryLabel}>Total Mins</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;