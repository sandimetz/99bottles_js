class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(starting, ending) {
    if (starting === 99 && ending === 98) {
      return (
        '99 bottles of beer on the wall, ' +
        '99 bottles of beer.\n' +
        'Take one down and pass it around, ' +
        '98 bottles of beer on the wall.\n' +
        '\n' +
        '98 bottles of beer on the wall, ' +
        '98 bottles of beer.\n' +
        'Take one down and pass it around, ' +
        '97 bottles of beer on the wall.\n'
      );
    } else if (starting === 2) {
      return this.verse(2) + '\n' + this.verse(1) +
        '\n' + this.verse(0);
    } else {
      return 'ok';
    }
  }

  verse(number) {
    switch (number) {
      case 0:
        return (
          'No more bottles of beer on the wall, ' +
          'no more bottles of beer.\n' +
          'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
        );
      case 1:
        return (
          '1 bottle of beer on the wall, ' +
          '1 bottle of beer.\n' +
          'Take it down and pass it around, ' +
          'no more bottles of beer on the wall.\n'
        );
      case 2:
        return (
          '2 bottles of beer on the wall, ' +
          '2 bottles of beer.\n' +
          'Take one down and pass it around, ' +
          '1 bottle of beer on the wall.\n'
        );
      case 3:
        return (
          '3 bottles of beer on the wall, ' +
          '3 bottles of beer.\n' +
          'Take one down and pass it around, ' +
          '2 bottles of beer on the wall.\n'
        );
      default:
        return (
          '99 bottles of beer on the wall, ' +
          '99 bottles of beer.\n' +
          'Take one down and pass it around, ' +
          '98 bottles of beer on the wall.\n'
        );
    }
  }
}

export { Bottles };
