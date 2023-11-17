/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const withVideos = require("next-videos");

module.exports = withVideos(nextConfig);
