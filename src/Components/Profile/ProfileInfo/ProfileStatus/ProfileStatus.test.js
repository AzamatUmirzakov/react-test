import ProfileStatus from "./ProfileStatus";
import { render, screen } from "@testing-library/react";

describe("ProfileStatus component", () => {
  test("renders without crashes", () => {
    render(<ProfileStatus />);
  });
  test("has right status", () => {
    render(<ProfileStatus status={"test"} />);
    expect(screen.getByText("test").textContent).toBe("test");
  });
});
