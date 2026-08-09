import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FlashCard from '../components/FlashCard';
import NavButtons from '../components/NavButtons';
import { styles } from '../styles/styles';

const HomeScreen = ({ flashcards, onAdd, onEdit, onDelete, onShuffle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDelete = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    onDelete(flashcards[currentIndex].id);
    setCurrentIndex(newIndex);
  };

  const handleShuffle = () => {
    setCurrentIndex(0);
    onShuffle();
  };

  if (flashcards.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Flashcard Quiz</Text>
            <Text style={styles.headerSubtitle}>0 cards</Text>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={onAdd} activeOpacity={0.7}>
            <Text style={styles.addButtonText}>+ Add Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No flashcards yet</Text>
          <Text style={styles.emptySubtitle}>
            Tap the Add Card button to create your first flashcard.
          </Text>
        </View>
      </View>
    );
  }

  const current = flashcards[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Flashcard Quiz</Text>
          <Text style={styles.headerSubtitle}>{flashcards.length} cards</Text>
        </View>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.shuffleButton} onPress={handleShuffle} activeOpacity={0.7}>
            <Text style={styles.shuffleButtonText}>Shuffle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={onAdd} activeOpacity={0.7}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.counterText}>
        Card {currentIndex + 1} of {flashcards.length}
      </Text>

      <FlashCard
        key={current.id}
        question={current.question}
        answer={current.answer}
      />

      <NavButtons
        currentIndex={currentIndex}
        total={flashcards.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(current)}
          activeOpacity={0.7}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDelete}
          activeOpacity={0.7}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
