import { logRoles, render, screen } from "@testing-library/react";
import Player from "../Components/Player";

const getPlayerElements = () => {
  return {
    playerListItem: screen.getByRole("listitem"),
    playerName: screen.getByText(/test/i),
    playerInput: screen.queryByRole("textbox"),
    playerSymbol: screen.getByText(/X/i),
    editButton: screen.getByRole("button", { name: /edit/i }),
    saveButton: screen.queryByRole("button", { name: /save/i }),
  };
};

test("player info and button render", () => {
  render(<Player name="test" symbol="X" />);
  screen.debug(); // This will log the HTML to help debug

  const {
    playerListItem,
    playerName,
    playerInput,
    playerSymbol,
    editButton,
    saveButton,
  } = getPlayerElements();

  expect(playerListItem).toBeInTheDocument();
  expect(playerName).toBeInTheDocument();
  expect(playerInput).not.toBeInTheDocument();
  expect(playerSymbol).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
  expect(saveButton).not.toBeInTheDocument();

  logRoles(document.body);
});
// import { render, screen, fireEvent } from "@testing-library/react";
// import Player from "../Components/Player";

// describe("Player component button functionality", () => {
//   test("toggles editing state when Edit button is clicked", () => {
//     render(<Player name="test" symbol="X" />);

//     // Initially, the player's name should be displayed as text
//     expect(screen.getByText("test")).toBeInTheDocument();
//     expect(screen.queryByRole("textbox")).not.toBeInTheDocument();

//     // Click the Edit button
//     const editButton = screen.getByRole("button", { name: /edit/i });
//     fireEvent.click(editButton);

//     // After clicking, the input field should be displayed with the player's name
//     const inputField = screen.getByRole("textbox");
//     expect(inputField).toBeInTheDocument();
//     expect(inputField).toHaveValue("test");

//     // Click the Edit button again to toggle back
//     fireEvent.click(editButton);

//     // The input field should disappear, and the player's name should be displayed again
//     expect(screen.getByText("test")).toBeInTheDocument();
//     expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
//   });
// });
