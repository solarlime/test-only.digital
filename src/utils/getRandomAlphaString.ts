const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export default function getRandomAlphaString(length: number): string {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
  }

  return array.join('');
}
