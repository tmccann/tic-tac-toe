import { logRoles, render, screen } from "@testing-library/react";
import Header from "../Components/Header";

describe("testing test", () => {
  test("main is in document", () => {
    render(<Header />);
    logRoles(document.body);
    const header = screen.getByRole("heading", { level: 1 });
    const image = screen.getByRole("img", { name: "game logo" });
    expect(header.textContent).toBe("Tic-Tac-Toe");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "game-logo.png");
  });
});
