import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routes from "../routes";

const directors = [
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Sky High"],
  },
  {
    name: "Jennifer Lee",
    movies: ["Frozen", "Frozen II"],
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: [`/directors`],
  initialIndex: 0,
});

test("renders without any errors", () => {
  const errorSpy = vi.spyOn(global.console, "error");
  render(<RouterProvider router={router} />);
  expect(errorSpy).not.toHaveBeenCalled();
  errorSpy.mockRestore();
});

test("renders 'Directors Page' inside of a <h1 />", () => {
  render(<RouterProvider router={router} />);
  const h1 = screen.getByRole("heading", { name: /Directors Page/i });
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each director's name", async () => {
  render(<RouterProvider router={router} />);
  for (const director of directors) {
    const heading = await screen.findByRole("heading", { name: director.name });
    expect(heading).toBeInTheDocument();
  }
});

test("renders a <li /> for each movie", async () => {
  render(<RouterProvider router={router} />);

  for (const director of directors) {
    for (const movie of director.movies) {
      const li = await screen.findByText(movie);
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});

test("renders the <NavBar /> component", () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/directors"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});
