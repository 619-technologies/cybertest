export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the shortcut to copy text in the terminal?",
    options: ["Ctrl + C", "Ctrl + Shift + C", "Ctrl + Insert", "Cmd + C"],
    correctAnswer: "Ctrl + Shift + C",
  },
  {
    id: 2,
    question: "Which shortcut is used to paste text in the terminal?",
    options: ["Ctrl + V", "Ctrl + Shift + V", "Shift + Insert", "Cmd + V"],
    correctAnswer: "Ctrl + Shift + V",
  },
  {
    id: 3,
    question: "What shortcut clears the terminal screen?",
    options: ["Ctrl + L", "Clear", "Ctrl + K", "Alt + L"],
    correctAnswer: "Ctrl + L",
  },
  {
    id: 4,
    question: "Which shortcut interrupts the current process?",
    options: ["Ctrl + C", "Ctrl + Z", "Ctrl + D", "Ctrl + X"],
    correctAnswer: "Ctrl + C",
  },
  {
    id: 5,
    question: "What shortcut moves the cursor to the beginning of the line?",
    options: ["Ctrl + A", "Home", "Alt + B", "Ctrl + E"],
    correctAnswer: "Ctrl + A",
  },
  {
    id: 6,
    question: "Which shortcut moves the cursor to the end of the line?",
    options: ["End", "Ctrl + E", "Alt + F", "Ctrl + A"],
    correctAnswer: "Ctrl + E",
  },
  {
    id: 7,
    question: "What shortcut deletes the word before the cursor?",
    options: ["Ctrl + W", "Alt + Backspace", "Ctrl + U", "Ctrl + K"],
    correctAnswer: "Ctrl + W",
  },
  {
    id: 8,
    question: "Which shortcut suspends the current foreground process?",
    options: ["Ctrl + Z", "Ctrl + S", "Ctrl + C", "Ctrl + D"],
    correctAnswer: "Ctrl + Z",
  },
  {
    id: 9,
    question: "What shortcut logs you out of the current session?",
    options: ["Ctrl + D", "Exit", "Ctrl + C", "Logout"],
    correctAnswer: "Ctrl + D",
  },
  {
    id: 10,
    question: "Which shortcut searches command history?",
    options: ["Ctrl + R", "Ctrl + H", "Ctrl + F", "Alt + R"],
    correctAnswer: "Ctrl + R",
  },
  {
    id: 11,
    question: "What shortcut deletes from cursor to end of line?",
    options: ["Ctrl + K", "Ctrl + U", "Alt + D", "Ctrl + E"],
    correctAnswer: "Ctrl + K",
  },
  {
    id: 12,
    question: "Which shortcut moves cursor forward one word?",
    options: ["Alt + F", "Ctrl + F", "Alt + Right", "Ctrl + Right"],
    correctAnswer: "Alt + F",
  },
  {
    id: 13,
    question: "What shortcut moves cursor backward one word?",
    options: ["Alt + B", "Ctrl + B", "Alt + Left", "Ctrl + Left"],
    correctAnswer: "Alt + B",
  },
  {
    id: 14,
    question: "Which shortcut deletes the character under the cursor?",
    options: ["Ctrl + D", "Delete", "Ctrl + H", "Alt + D"],
    correctAnswer: "Ctrl + D",
  },
  {
    id: 15,
    question: "What shortcut switches to virtual console 1?",
    options: ["Ctrl + Alt + F1", "Alt + F1", "Ctrl + F1", "Shift + F1"],
    correctAnswer: "Ctrl + Alt + F1",
  },
  {
    id: 16,
    question: "Which shortcut deletes from cursor to start of line?",
    options: ["Ctrl + U", "Ctrl + W", "Alt + Backspace", "Ctrl + H"],
    correctAnswer: "Ctrl + U",
  },
  {
    id: 17,
    question: "What shortcut repeats the last command?",
    options: ["!!", "Up Arrow", "Ctrl + P", "Alt + R"],
    correctAnswer: "!!",
  },
  {
    id: 18,
    question: "Which shortcut stops output to the screen?",
    options: ["Ctrl + S", "Ctrl + Q", "Ctrl + O", "Ctrl + P"],
    correctAnswer: "Ctrl + S",
  },
  {
    id: 19,
    question: "What shortcut resumes output to the screen?",
    options: ["Ctrl + Q", "Ctrl + S", "Ctrl + R", "Ctrl + O"],
    correctAnswer: "Ctrl + Q",
  },
  {
    id: 20,
    question: "Which shortcut opens a new terminal tab?",
    options: ["Ctrl + Shift + T", "Ctrl + T", "Alt + T", "Cmd + T"],
    correctAnswer: "Ctrl + Shift + T",
  },
];
