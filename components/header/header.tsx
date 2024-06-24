import React from "react";
import Logo from "./logo";
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />
      <Navigation />
      <ThemeToggle />
    </header>
  );
}
