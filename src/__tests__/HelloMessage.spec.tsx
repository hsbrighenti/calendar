import React from "react";
import { render, screen } from "@testing-library/react";
import HelloMessage from "../HelloMessage";

describe("HelloMessage", () => {
  describe("When no name is passed", () => {
    beforeAll(() => {
      render(<HelloMessage />);
    });

    it("says Hello world", () => {
      const testMessage = "Hello World";
      expect(screen.queryByText(testMessage)).toBeDefined();
    });
  });

  describe("When a name is passed", () => {
    beforeAll(() => {
      render(<HelloMessage name="Rick" />);
    });

    it("says Hello followed by the given name", () => {
      const testMessage = "Hello Rick";
      expect(screen.queryByText(testMessage)).toBeDefined();
    });
  });
});
