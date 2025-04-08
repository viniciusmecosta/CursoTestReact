import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Deve renderizar o componente", () => {
  test("contendo parte do texto indicado", () => {
    render(<App />);

    const linkElement = screen.getByText(/to reload/i);

    expect(linkElement).toBeInTheDocument();
  });

  test("contendo integralmente o texto indicado", () => {
    render(<App />);

    const linkElement = screen.getByText("Learn React");

    expect(linkElement).toBeInTheDocument();
  });

  test("e pesquisar em um componente, não contendo o texto indicado", () => {
    render(<App />);

    const linkElement = screen.queryByText("um texto");

    expect(linkElement).not.toBeInTheDocument();
  });
});
