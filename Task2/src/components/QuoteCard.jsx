import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

const QuoteCard = ({ quote }) => {
  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteMarkTop}>"</Text>
      <View style={styles.card}>
        <Text style={styles.quoteText}>{quote.text}</Text>
        <View style={styles.divider} />
        <Text style={styles.authorText}>— {quote.author}</Text>
      </View>
      <Text style={styles.quoteMarkBottom}>"</Text>
    </View>
  );
};

export default QuoteCard;
