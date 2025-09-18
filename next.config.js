// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/download",
        destination: "https://www.download.katanainu.com/Katanainu-launcher.exe", // External URL
        permanent: true, // true = 308 Permanent Redirect, false = 307 Temporary Redirect
      },
    ];
  },
};