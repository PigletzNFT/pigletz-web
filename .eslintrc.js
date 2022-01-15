module.exports = {
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
        jest: {
            version: "latest",
        },
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
        "react/jsx-props-no-spreading": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ]
    },
};
