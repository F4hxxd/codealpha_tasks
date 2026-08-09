module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'import/no-duplicates': ['error', { 'prefer-inline': false }],
  },
};