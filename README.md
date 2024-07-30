 <h1 align="center">
🔧 WEBPACK  Tailwind CSS Eslint - Prettier - Stylelint 🔦   </h1>

<p align="center">
  ⚡ Template config linters for React apps with TypeScript and TailwindCSS</p>

## 👾Content👾

      "react@18.3.1"
      "react-dom@18.3.1"
      "tailwindcss@3.4.7"

## 🍓Husky🍓

`npm run prepare`

Include in package.json

```JSON
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint 'src/**/*' --fix ",
      "bash -c tsc --noEmit --pretty",
      "prettier -w"
    ],
    "*.html": [
      "prettier -w"
    ],
    "*.{css,scss}": "stylelint --fix"
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
```

## 🍄commitlint🍄

```BASH
  git add .
  npm run commit
```

- commilint prompt
  <a href="https://commitlint.js.org/reference/prompt.html#prompt"> CommitLint Prompt </a>
- commitlint/config-conventional
  <a href="https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#commitlintconfig-conventional">commitlint/config-conventional<a/>
