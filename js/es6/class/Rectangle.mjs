export class Rectangle {
  height = 0;
  width = 0;

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}