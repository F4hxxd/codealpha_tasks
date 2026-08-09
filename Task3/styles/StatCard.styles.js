import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#121212',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
  },
  title: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  unit: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  goal: {
    color: '#666666',
    fontSize: 11,
    marginTop: 6,
  },
});