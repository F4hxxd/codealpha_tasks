import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const NavButtons = ({ currentIndex, total, onPrev, onNext }) => {
  const dots = Array.from({ length: total });

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={[styles.navButton, currentIndex === 0 && styles.navButtonDisabled]}
        onPress={onPrev}
        activeOpacity={0.7}
        disabled={currentIndex === 0}>
        <Text style={styles.navButtonText}>Previous</Text>
      </TouchableOpacity>

      <View style={styles.progressDotRow}>
        {dots.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressDot,
              index === currentIndex && styles.progressDotActive,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[styles.navButton, currentIndex === total - 1 && styles.navButtonDisabled]}
        onPress={onNext}
        activeOpacity={0.7}
        disabled={currentIndex === total - 1}>
        <Text style={styles.navButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavButtons;
