import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/styles';

const AddEditScreen = ({ existingCard, onSave, onBack }) => {
  const [question, setQuestion] = useState(existingCard ? existingCard.question : '');
  const [answer, setAnswer] = useState(existingCard ? existingCard.answer : '');
  const [questionError, setQuestionError] = useState('');
  const [answerError, setAnswerError] = useState('');

  const validate = () => {
    let valid = true;
    if (!question.trim()) {
      setQuestionError('Question cannot be empty');
      valid = false;
    } else {
      setQuestionError('');
    }
    if (!answer.trim()) {
      setAnswerError('Answer cannot be empty');
      valid = false;
    } else {
      setAnswerError('');
    }
    return valid;
  };

  const handleSave = () => {
    if (!validate()) return;
    onSave({
      id: existingCard ? existingCard.id : Date.now().toString(),
      question: question.trim(),
      answer: answer.trim(),
    });
  };

  return (
    <ScrollView style={styles.formContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.formHeader}>
        <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.formTitle}>
          {existingCard ? 'Edit Card' : 'New Card'}
        </Text>
      </View>

      <Text style={styles.label}>Question</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter your question here"
        placeholderTextColor="#888888"
        value={question}
        onChangeText={(text) => setQuestion(text)}
        multiline={true}
        autoCapitalize="sentences"
        autoCorrect={false}
        returnKeyType="next"
        selectionColor="#4361ee"
        onFocus={() => setQuestionError('')}
      />
      {questionError ? <Text style={styles.errorText}>{questionError}</Text> : null}

      <Text style={styles.label}>Answer</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter the answer here"
        placeholderTextColor="#888888"
        value={answer}
        onChangeText={(text) => setAnswer(text)}
        multiline={true}
        autoCapitalize="sentences"
        autoCorrect={false}
        returnKeyType="done"
        selectionColor="#4361ee"
        onFocus={() => setAnswerError('')}
      />
      {answerError ? <Text style={styles.errorText}>{answerError}</Text> : null}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave} activeOpacity={0.7}>
        <Text style={styles.saveButtonText}>
          {existingCard ? 'Save Changes' : 'Add Flashcard'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddEditScreen;
