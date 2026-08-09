import { StyleSheet } from 'react-native';

export const colors = {
  background: '#ffffff',
  card: '#f5f5f5',
  primary: '#000000',
  grey: '#666666',
  lightGrey: '#e0e0e0',
  border: '#dddddd',
  danger: '#cc0000',
  white: '#ffffff',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 54,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: colors.grey,
    fontSize: 13,
    marginTop: 3,
  },

  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  quoteMarkTop: {
    fontSize: 80,
    color: colors.lightGrey,
    lineHeight: 80,
    alignSelf: 'flex-start',
    marginBottom: -20,
    fontWeight: 'bold',
  },

  card: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 28,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },

  quoteText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 32,
    textAlign: 'center',
    marginBottom: 24,
  },

  divider: {
    width: 40,
    height: 2,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 2,
  },

  authorText: {
    color: colors.grey,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  quoteMarkBottom: {
    fontSize: 80,
    color: colors.lightGrey,
    lineHeight: 80,
    alignSelf: 'flex-end',
    marginTop: -20,
    fontWeight: 'bold',
  },

  counterText: {
    color: colors.grey,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 20,
  },

  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 24,
    gap: 12,
  },

  newQuoteButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  newQuoteButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  shareButton: {
    backgroundColor: colors.background,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  shareButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
  },
});
