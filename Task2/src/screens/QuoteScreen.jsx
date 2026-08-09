import { useState } from 'react';
import { View, Text, Alert, Clipboard } from 'react-native';
import QuoteCard from '../components/QuoteCard';
import NewQuoteButton from '../components/NewQuoteButton';
import { quotes, getRandomQuote } from '../data/quotes';
import { styles } from '../styles/styles';

const QuoteScreen = () => {
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [quoteNumber, setQuoteNumber] = useState(1);

  const handleNewQuote = () => {
    const newQuote = getRandomQuote(currentQuote.id);
    setCurrentQuote(newQuote);
    setQuoteNumber(prev => prev + 1);
  };

  const handleCopy = () => {
    Clipboard.setString(`"${currentQuote.text}" — ${currentQuote.author}`);
    Alert.alert('Copied!', 'Quote copied to clipboard.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daily Quotes</Text>
        <Text style={styles.headerSubtitle}>Tap New Quote for inspiration</Text>
      </View>

      <QuoteCard quote={currentQuote} />

      <NewQuoteButton
        onNewQuote={handleNewQuote}
        onShare={handleCopy}
        quoteNumber={quoteNumber}
        total={quotes.length}
      />
    </View>
  );
};

export default QuoteScreen;
