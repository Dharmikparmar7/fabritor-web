/* eslint-disable @typescript-eslint/quotes */
const webpack = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: process.env.URL,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/, // Add support for TypeScript files
        exclude: /node_modules/,
        use: {
          loader: "ts-loader", // OR use babel-loader with @babel/preset-typescript
        },
      },
      {
        test: /\.html$/,
        use: "raw-loader", // Load HTML as raw text
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Process images
        type: "asset/resource", // Use Webpack's built-in asset module
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/, // Handle SCSS files
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/, // Handle LESS files
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "fabritor",
      filename: "remoteEntry.js",
      exposes: {
        "./ImageEditor": "./src/module-component.tsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
      },
    }),
  ],
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".png",
      ".jpg",
      ".jpeg",
      ".svg",
      ".css",
      ".scss",
      ".less",
    ],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      ice: path.resolve(__dirname, ".ice"), // Alias ice/ to .ice/
    },
  },
  devServer: {
    port: 3001,
    static: path.join(__dirname, "build"),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
