import { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import AddEditScreen from './src/screens/AddEditScreen';
import { initialFlashcards, shuffleCards } from './src/data/flashcards';

const App = () => {
  const [flashcards, setFlashcards] = useState(shuffleCards(initialFlashcards));
  const [screen, setScreen] = useState('home');
  const [editingCard, setEditingCard] = useState(null);

  const handleAdd = () => {
    setEditingCard(null);
    setScreen('addEdit');
  };

  const handleEdit = (card) => {
    setEditingCard(card);
    setScreen('addEdit');
  };

  const handleSave = (card) => {
    if (editingCard) {
      setFlashcards(flashcards.map(f => f.id === card.id ? card : f));
    } else {
      setFlashcards([...flashcards, card]);
    }
    setScreen('home');
  };

  const handleDelete = (id) => {
    setFlashcards(flashcards.filter(f => f.id !== id));
  };

  const handleShuffle = () => {
    setFlashcards(prev => shuffleCards(prev));
  };

  return (
    <View style={{ flex: 1 }}>
      {screen === 'home' ? (
        <HomeScreen
          flashcards={flashcards}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onShuffle={handleShuffle}
        />
      ) : (
        <AddEditScreen
          existingCard={editingCard}
          onSave={handleSave}
          onBack={() => setScreen('home')}
        />
      )}
    </View>
  );
};

export default App;
