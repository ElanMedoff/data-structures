import { assertEquals } from "https://deno.land/std@0.174.0/testing/asserts.ts";
import { Stack } from "./main.ts";

Deno.test("push", () => {
  Deno.test("it should push to an empty stack", () => {
    const stack = new Stack();
    stack.push(1);
  });

  Deno.test("it should push to a populated stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
  });
});

Deno.test("pop", () => {
  Deno.test("if the stack is empty, it should return null", () => {
    const stack = new Stack();
    assertEquals(stack.pop(), null);
  });

  Deno.test(
    "if the stack is populated, it should return the top element",
    () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      assertEquals(stack.pop(), 3);
      assertEquals(stack.pop(), 2);
      assertEquals(stack.pop(), 1);
    }
  );
});
