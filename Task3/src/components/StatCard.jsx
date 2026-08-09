import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/StatCard.styles'; // Root folder import

const StatCard = ({ title, value, unit, goal }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valueRow}>
        <Text style={styles.value}>{value}</Text>
        {unit ? <Text style={styles.unit}> {unit}</Text> : null}
      </View>
      {goal ? <Text style={styles.goal}>Goal: {goal} {unit}</Text> : null}
    </View>
  );
};

export default StatCard;