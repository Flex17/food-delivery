module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "airbnb",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "i18next"],
    rules: {
        indent: [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/require-default-props": "off",
        "no-tabs": "off",
        "react/react-in-jsx-scope": "off",
        "max-len": ["error", { code: 120, ignoreComments: true }],
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        quotes: ["warn", "double"],
        "no-shadow": "off",
        "react/jsx-props-no-spreading": "warn",
        "no-underscore-dangle": "off",
        "react/function-component-definition": "off",
        "no-param-reassign": "off",
        "arrow-parens": "off",
        "comma-dangle": "off",
        "no-restricted-syntax": "off",
        "object-curly-newline": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react/display-name": "off",
        "i18next/no-literal-string": [
            "warn",
            {
                markupOnly: true,
                ignoreAttribute: ["data-testid", "to"],
            },
        ],
    },
    overrides: [
        {
            files: ["**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
};
