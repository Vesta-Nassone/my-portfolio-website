<div align="center">
    <img height="100" src="https://www.logolynx.com/images/logolynx/8d/8dbb9e50c4cb8441d5e8be12932f958b.jpeg">
    <h1 align="center">Optimus</h1>
    <p>This is the UI library for Tripplo's Optimus design system. <span>🤖</span></p>
    <a href="https://github.com/Tripplo-Software/optimus" title="Tripplo Optimus">
    </a>
    <p>
      <img alt="MIT License" src="https://img.shields.io/github/license/chakra-ui/chakra-ui"/>
      <img src="https://img.shields.io/npm/v/@apollo/space-kit.svg">
    </p>
  </div>
  Optimus UI provides a set of accessible, reusable, and composable React
  components that make it super easy to create websites and apps.

  ## Documentation? 📝
  Documentation will be found <a href="optimus-ui.netlify.app/">here.</a>

  ## Getting started

  ```shell
  npm install
  or
  yarn install
  ```

  ## Usage

  ```tsx
  import "./styles.css";
import { Button, Typography } from "optimus-ui";
import "optimus-ui/dist/optimus-ui.css";
export default function App() {
  return (
    <div className="App">
      <Typography
        variant="HeadingThree">Hello CodeSandbox
      </Typography>
      <h2>Start editing to see some magic happen!</h2>
      <Button 
      variant="BlueDarkButton" 
      size="small">
        Button
      </Button>
    </div>
  );
}
  ```

  ### Tests

We use `jest` and `testing-library` for unit/integration tests.
