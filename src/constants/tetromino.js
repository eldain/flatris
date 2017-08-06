export const COLORS = {
  I: '#0D1321',
  O: '#28536B',
  T: '#80475E',
  J: '#F0EBD8',
  L: '#0D1321',
  S: '#28536B',
  Z: '#80475E'
};

// The Shapes and their rotation was inspired from
// http://tetris.wikia.com/wiki/SRS
// TODO: Convert to objects
export const SHAPES = {
  I: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  O: [[1, 1], [1, 1]],
  T: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
  J: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
  L: [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
  S: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
  Z: [[1, 1, 0], [0, 1, 1], [0, 0, 0]]
};
