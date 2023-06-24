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

## Tests

- npm i jest @types/jest ts-jest ts-node -D
  - npx jest --init
- npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event -D
- npm i babel-jest @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript identity-obj-proxy jest-environment-jsdom -D

  - obs: no final do arquivo "package.json" ou no jest.config.json
    ```
    "jest": {
        "testEnvironment": "jest-environment-jsdom",
        "setupFilesAfterEnv": ["<rootDir>/.jest/setup-tests.tsx"],
        "moduleNameMapper": {
          "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.ts",
          "\\.(css|less|sass|scss)$": "identity-obj-proxy"
        },
      }
    ```

  - Criar uma pasta na raiz do projeto `".jest"`;
    - Criar um arquivo `"setup-tests.tsx"`
      - Adicinar no arquivo `import "@testing-library/jest-dom"`
    - Criar uma pasta `"mocks"`
      - Criar um arquivo `"fileMocks.ts"`
        - Adicinar no arquivo `module.exports = "test-file-stub"`

  - Criar um arquivo `"babel.config.json"`
    ```
    {
      "presets": [
        ["@babel/preset-env", { "targets": { "esmodules": true } }],
        ["@babel/preset-react", { "runtime": "automatic" }],
        "@babel/preset-typescript"
      ]
    }
    ```