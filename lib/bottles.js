class Bottles {
  verse(number) {
    if (number === 2) {
      return (
        '2 bottles of beer on the wall, ' +
        '2 bottles of beer.\n' +
        'Take one down and pass it around, ' +
        '1 bottle of beer on the wall.\n'
      );
    } else {
      return (
        `${number} bottles of beer on the wall, ` +
        `${number} bottles of beer.\n` +
        'Take one down and pass it around, ' +
        `${number-1} bottles of beer on the wall.\n`
      );
    }
  }
}

export { Bottles };
