class Bottles {
  verse(number) {
    return (
      `${number} bottles of beer on the wall, ` +
      `${number} bottles of beer.\n` +
      'Take one down and pass it around, ' +
      `${number-1} bottles of beer on the wall.\n`
    );
  }
}

export { Bottles };
