/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = {
//   images: {
//     domains: ["https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5179601692155994&height=50&width=50&ext=1656825520&hash=AeTf-cxyYjtKa4VwIyk"],
//   },
// };
module.exports = {
  nextConfig,
  images: {
    domains: ["platform-lookaside.fbsbx.com", "links.papareact.com"],
  },
};
