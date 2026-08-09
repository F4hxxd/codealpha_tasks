import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/ProgressBar.styles';

const ProgressBar = ({ label, current, target, unit }) => {
  const percentage = Math.min(Math.round((current / target) * 100), 100);

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.stats}>
          {current} / {target} {unit} ({percentage}%)
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

export default ProgressBar;