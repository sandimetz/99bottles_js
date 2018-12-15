import { downTo } from './helpers';

const NoMore = verse =>
  'No more bottles of beer on the wall, ' +
  'no more bottles of beer.\n' +
  'Go to the store and buy some more, ' +
  '99 bottles of beer on the wall.\n';

const LastOne = verse =>
  '1 bottle of beer on the wall, ' +
  '1 bottle of beer.\n' +
  'Take it down and pass it around, ' +
  'no more bottles of beer on the wall.\n';

const Penultimate = verse =>
  '2 bottles of beer on the wall, ' +
  '2 bottles of beer.\n' +
  'Take one down and pass it around, ' +
  '1 bottle of beer on the wall.\n';

const Default = verse =>
  `${verse.number()} bottles of beer on the wall, ` +
  `${verse.number()} bottles of beer.\n` +
  'Take one down and pass it around, ' +
  `${verse.number() - 1} bottles of beer on the wall.\n`;

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(finish, start) {
    return downTo(finish, start)
      .map(verseNumber => this.verse(verseNumber))
      .join('\n');
  }

  verse(number) {
    return this.verseFor(number).text();
  }

  verseFor(number) {
    switch (number) {
      case 0:  return new Verse(number, NoMore);
      case 1:  return new Verse(number, LastOne);
      case 2:  return new Verse(number, Penultimate);
      default: return new Verse(number, Default);
    }
  }
}

class Verse {
  constructor(number, lyrics) {
    this._number = number;
    this.lyrics = lyrics;
  }

  number() {
    return this._number;
  }

  text() {
    return this.lyrics(this);
  }
}

export { Bottles };
