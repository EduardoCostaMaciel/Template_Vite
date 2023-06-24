## Eslint/Config

- npx eslint --init
- npm install eslint-plugin-react-hooks -D
  ```
  "plugins": [
    ...,
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
  }
  ```
- npm install --save-dev --save-exact prettier
- npm install eslint-config-prettier eslint-plugin-prettier -D
  ```
  "extends": [
    ...,
    "plugin:prettier/recommended",
    "prettier"
  ],
  "rules": {
    ...,
    "prettier/prettier": "error",
  }
  ```
- npm install eslint-plugin-import-helpers -D
  ```
  "plugins": [
    ...,
    "eslint-plugin-import-helpers"
  ],
  "rules": {
    ...,
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
            ["/^react/", "/^next/", "/@next/"],
            "/^components/",
            "/module/",
            "/^@shared/",
            "/absolute/",
            ["parent", "sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ]
  }
  ```