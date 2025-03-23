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
    render(<Player defaultName="test" symbol="X" isActive={true} />);
  });

  test("should render player component with default values", () => {
    const { playerListItem, playerName, playerSymbol, editButton, saveButton } =
      getPlayerElements();
    expect(playerListItem).toBeInTheDocument();
    expect(playerName).toBeInTheDocument();
    expect(playerSymbol).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(saveButton).not.toBeInTheDocument();
  });

  test("player name should be editable and saved correctly", async () => {
    const { editButton } = getPlayerElements();
    await user.click(editButton);
    expect(screen.queryByRole("button", { name: /save/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /edit/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).toBeInTheDocument();
    await user.clear(screen.queryByRole("textbox")!);
    await user.type(screen.queryByRole("textbox")!, "new name");
    await user.click(screen.queryByRole("button", { name: /save/i })!);
    expect(screen.queryByText("new name")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /save/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /edit/i })).toBeInTheDocument();
    expect(screen.queryByText("new name")).toBeInTheDocument();
  });

  test("player should be highlighted when active", () => {
    const { playerListItem } = getPlayerElements();
    expect(playerListItem).toHaveClass("active");
  });

  test("player should not be highlighted when inactive", () => {
    render(<Player defaultName="Test Player" symbol="O" isActive={false} />);
    const playerListItems = screen.getAllByRole("listitem");
    const playerO = playerListItems[1];
    expect(playerO).not.toHaveClass("active");
  });
});
