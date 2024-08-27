import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import Page from "@/app/(pages)/(website)/(home)/page";
import * as React from 'react'

describe("Testing home UI: Unit testing", () => {
    test("display the homepage", () => {
      // ARRANGE
      render(<Page />); 
  
      // ACT
      const heading = screen.getByRole("heading", {
        name: "home",
      });
  
      // ASSERT
      expect(heading).toBeDefined();
    });
  });
