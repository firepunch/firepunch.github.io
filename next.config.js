// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// })

// const nextConfig = {
//   pageExtensions: ['js', 'mdx'],
// }

// module.exports = withMDX(nextConfig)

module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
};