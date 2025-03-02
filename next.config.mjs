/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io"
            },{
                protocol: "https",
                hostname: "vercel.app",
            },{
                protocol:"https",
                hostname:"ufs.sh",
            }
        ],
        domains: ["vercel.app"]
    }
};

export default nextConfig;
