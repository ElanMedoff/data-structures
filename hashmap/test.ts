import { assertEquals } from "https://deno.land/std@0.174.0/testing/asserts.ts";
import { Hashmap } from "./main.ts";

Deno.test("get", () => {
  Deno.test("returns null for a nonexistent item", () => {
    const hashmap = new Hashmap();
    assertEquals(hashmap.get("foo"), null);
    hashmap.set("foo", "bar", 0);
    hashmap.get("key", 0);
    assertEquals(hashmap.get("key"), null);
  });

  Deno.test(
    "if there are multiple entries in the hash index, returns the appropriate one",
    () => {
      const hashmap = new Hashmap();
      hashmap.set("foo", "bar", 0);
      hashmap.set("key", "value", 0);
      assertEquals(hashmap.get("foo"), "bar");
      assertEquals(hashmap.get("key"), "value");
    }
  );
});

Deno.test("set", () => {
  Deno.test(
    "if the index is empty, it should create an array to append to",
    () => {
      const hashmap = new Hashmap();
      hashmap.set("foo", "bar");
      assertEquals(hashmap.get("foo"), "bar");
    }
  );

  Deno.test("if the index is already populated, it should append to it", () => {
    const hashmap = new Hashmap();
    hashmap.set("foo", "bar", 0);
    assertEquals(hashmap.get("foo"), "bar");
    hashmap.set("key", "value", 0);
    assertEquals(hashmap.get("key"), "value");
  });

  Deno.test("if the key already exists, it should overwrite it", () => {
    const hashmap = new Hashmap();
    hashmap.set("foo", "bar");
    assertEquals(hashmap.get("foo"), "bar");
    hashmap.set("key", "bar");
    assertEquals(hashmap.get("key"), "bar");
    assertEquals(hashmap.get("foo"), null);
  });
});

Deno.test("remove", () => {
  Deno.test("if the index is empty, it should not throw", () => {
    const hashmap = new Hashmap();
    hashmap.remove("foo");
  });

  Deno.test(
    "if the index is populated but the key is not present, it should not throw",
    () => {
      const hashmap = new Hashmap();
      hashmap.set("foo", "bar", 0);
      hashmap.remove("key", 0);
    }
  );
});
