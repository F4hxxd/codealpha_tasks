import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const FlashCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, showAnswer && styles.cardBack]}>
        <Text style={[styles.cardLabel, showAnswer && { color: '#aaaaaa' }]}>
          {showAnswer ? 'Answer' : 'Question'}
        </Text>
        <Text style={showAnswer ? styles.cardAnswerText : styles.cardText}>
          {showAnswer ? answer : question}
        </Text>
      </View>

      {showAnswer ? (
        <TouchableOpacity
          style={styles.hideAnswerButton}
          onPress={() => setShowAnswer(false)}
          activeOpacity={0.7}>
          <Text style={styles.hideAnswerText}>Hide Answer</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.showAnswerButton}
          onPress={() => setShowAnswer(true)}
          activeOpacity={0.7}>
          <Text style={styles.showAnswerText}>Show Answer</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FlashCard;
