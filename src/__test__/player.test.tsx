import { render, screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
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

describe("Player component", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
    render(<Player defaultName="test" symbol="X" />);
  });
  test("should render player name, symbol and edit button,", () => {
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
  });
  test("should show input field and save button when edit button is clicked", async () => {
    const { editButton } = getPlayerElements();
    expect(editButton).toBeInTheDocument();
    await user.click(editButton!);
    expect(screen.queryByRole("textbox")!).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /save/i })!
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /edit/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
  });

  test("should clear and type in the input field", async () => {
    const { editButton } = getPlayerElements();
    await user.click(editButton!);
    await user.clear(screen.queryByRole("textbox")!);
    expect(screen.queryByRole("textbox")!).toHaveValue("");
    await user.type(screen.queryByRole("textbox")!, "new name");
    expect(screen.queryByRole("textbox")!).toHaveValue("new name");
  });

  test("should show player name and edit button when save button is clicked", async () => {
    const { editButton } = getPlayerElements();
    await user.click(editButton!);
    await user.clear(screen.queryByRole("textbox")!);
    await user.type(screen.queryByRole("textbox")!, "new name");
    await user.click(screen.queryByRole("button", { name: /save/i })!);
    expect(screen.queryByText(/new name/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /edit/i })!
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /save/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")!).not.toBeInTheDocument();
  });
});
