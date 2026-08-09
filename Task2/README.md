# Flashcard Quiz App — CodeAlpha Task 1

A clean and minimal flashcard quiz app built with React Native.

## Features
- View flashcards with question on front and answer on back
- Show / Hide answer toggle
- Navigate between cards using Next and Previous buttons
- Progress dots showing current position
- Add new flashcards
- Edit existing flashcards
- Delete flashcards
- Empty state when no cards exist
- Input validation on Add / Edit form

## Project Structure

```
FlashcardQuizApp/
├── App.jsx
├── src/
│   ├── components/
│   │   ├── FlashCard.jsx
│   │   └── NavButtons.jsx
│   ├── screens/
│   │   ├── HomeScreen.jsx
│   │   └── AddEditScreen.jsx
│   ├── styles/
│   │   └── styles.js
│   └── data/
│       └── flashcards.js
└── README.md
```

## Concepts Used
- Functional Components
- JSX
- Props
- State & useState
- TouchableOpacity
- StyleSheet (External Styling)
- Screens vs Components structure
- TextInput with validation

## How to Run

1. Create a new React Native project:
```
npx react-native init FlashcardQuizApp
```

2. Replace the default files with the files from this folder.

3. Install dependencies:
```
npm install
```

4. Run the app:
```
npm start
```

Then press `a` for Android or `i` for iOS.

## Built By
Muhammad Fahad
linkedin.com/in/muhammadfahad27
