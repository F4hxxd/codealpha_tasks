import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen';
import AddWorkoutScreen from './src/screens/AddWorkoutScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import styles from './styles/App.styles'; // Direct root import

const App = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const [workouts, setWorkouts] = useState([
    { id: '1', type: 'Morning Run', duration: 30, calories: 250, date: 'Aug 8' },
    { id: '2', type: 'Weight Training', duration: 45, calories: 320, date: 'Aug 9' },
  ]);

  const dailyGoals = {
    steps: 10000,
    calories: 500,
    duration: 60,
  };

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([newWorkout, ...workouts]);
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FITNESS TRACKER</Text>
      </View>

      <View style={styles.body}>
        {activeTab === 'Dashboard' && (
          <DashboardScreen workouts={workouts} goals={dailyGoals} />
        )}
        {activeTab === 'Add' && (
          <AddWorkoutScreen onAddWorkout={handleAddWorkout} />
        )}
        {activeTab === 'History' && (
          <HistoryScreen workouts={workouts} onDeleteWorkout={handleDeleteWorkout} />
        )}
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navButton, activeTab === 'Dashboard' && styles.navButtonActive]}
          onPress={() => setActiveTab('Dashboard')}
        >
          <Text style={[styles.navText, activeTab === 'Dashboard' && styles.navTextActive]}>
            Dashboard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, activeTab === 'Add' && styles.navButtonActive]}
          onPress={() => setActiveTab('Add')}
        >
          <Text style={[styles.navText, activeTab === 'Add' && styles.navTextActive]}>
            + Log
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, activeTab === 'History' && styles.navButtonActive]}
          onPress={() => setActiveTab('History')}
        >
          <Text style={[styles.navText, activeTab === 'History' && styles.navTextActive]}>
            History
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;