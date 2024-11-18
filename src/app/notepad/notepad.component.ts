import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notepad.component.html',
  styleUrl: './notepad.component.scss'
})
export class NotepadComponent implements OnInit {
  randomText: string = '';
  userInput: string = '';
  highlightedText: { char: string; class: string }[] = [];

  private textSnippets: string[] = [
    "It was the best of times, it was the worst of times.",
    "To be, or not to be, that is the question.",
    "May the Force be with you.",
    "I'm going to make him an offer he can't refuse.",
    "All we have to decide is what to do with the time that is given us.",
    "Elementary, my dear Watson.",
    "I find your lack of faith disturbing.",
    "Frankly, my dear, I don't give a damn."
  ];
  constructor() { }

  ngOnInit(): void {
    this.generateRandomText();
  }

  generateRandomText(): void {
    const randomIndex = Math.floor(Math.random() * this.textSnippets.length);
    this.randomText = this.textSnippets[randomIndex];
  }

  onInitialFocus() {
    const notepad = document.querySelector('.notepad') as HTMLDivElement;
    if (notepad) {
      notepad.focus();
      notepad.textContent = '';
    }
  }

  checkTyping(): void {
    this.highlightedText = [];
    const userChars = this.userInput.split('');
    const snippetChars = this.randomText.split('');

    snippetChars.forEach((char, index) => {
      const userChar = userChars[index] || '';
      const isCorrect = userChar === char;
      this.highlightedText.push({
        char,
        class: isCorrect ? 'correct' : userChar ? 'incorrect' : ''
      });
    });
  }

}
