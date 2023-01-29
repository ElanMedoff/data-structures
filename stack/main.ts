export class Stack {
  arr: number[];

  constructor() {
    this.arr = [];
  }

  push = (toPush: number) => {
    this.arr.push(toPush);
  };

  pop = () => {
    return this.arr.pop() ?? null;
  };

  print = () => {
    console.log(this.arr);
  };
}
