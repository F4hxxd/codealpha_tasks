import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const NewQuoteButton = ({ onNewQuote, onShare, quoteNumber, total }) => {
  return (
    <View>
      <Text style={styles.counterText}>Quote {quoteNumber} of {total}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.newQuoteButton}
          onPress={onNewQuote}
          activeOpacity={0.7}>
          <Text style={styles.newQuoteButtonText}>New Quote</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={onShare}
          activeOpacity={0.7}>
          <Text style={styles.shareButtonText}>Copy Quote</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewQuoteButton;
