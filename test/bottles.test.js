import { BottleVerse, CountDownSong } from '../lib/bottles';

class FakeVerse {
  constructor(number) {
    this.number = number;
  }

  lyrics() {
    return `This is verse ${this.number}.\n`;
  }
}

describe('CountDownSong', () => {
  test('a verse', () => {
    const expected = 'This is verse 99.\n';
    expect(new CountDownSong(FakeVerse).verse(99)).toBe(expected);
  });

  test('a couple verses', () => {
    const expected = 'This is verse 99.\n' +
      '\n' +
      'This is verse 98.\n';
    expect(new CountDownSong(FakeVerse).verses(99, 98)).toBe(expected);
  });

  test('the whole song', () => {
    const expected =
`This is verse 47.

This is verse 46.

This is verse 45.

This is verse 44.

This is verse 43.
`;
    expect(new CountDownSong(FakeVerse, 47, 43).song()).toBe(expected);
  });
});

describe('BottleVerse', () => {
  test('the first verse', () => {
    const expected = '99 bottles of beer on the wall, ' +
      '99 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of beer on the wall.\n';
    expect(new BottleVerse(99).lyrics()).toBe(expected);
  });

  test('another verse', () => {
    const expected = '3 bottles of beer on the wall, ' +
      '3 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '2 bottles of beer on the wall.\n';
    expect(new BottleVerse(3).lyrics()).toBe(expected);
  });

  test('verse 2', () => {
    const expected = '2 bottles of beer on the wall, ' +
      '2 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of beer on the wall.\n';
    expect(new BottleVerse(2).lyrics()).toBe(expected);
  });

  test('verse 1', () => {
    const expected = '1 bottle of beer on the wall, ' +
      '1 bottle of beer.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of beer on the wall.\n';
    expect(new BottleVerse(1).lyrics()).toBe(expected);
  });

  test('verse 0', () => {
    const expected = 'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';
    expect(new BottleVerse(0).lyrics()).toBe(expected);
  });
});
