import React from "react";

import App from "../src/App";

import { render, screen, logRoles } from "@testing-library/react";

describe("<App/>", () => {
  const view = render(<App />);
  logRoles(view.container);
  const titulo = screen.getByRole("heading", { name: "Hello World" });
  it('Deve está visível o titulo "Hello World"', () => {
    expect(titulo).toBeVisible();
  });
});
