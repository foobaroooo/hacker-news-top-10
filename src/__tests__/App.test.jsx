import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    it("should render top 10 hacker news", () => {
        render(<App />);
        expect(screen.getByText("Top 10 Hacker News")).toBeInTheDocument();
    });
});