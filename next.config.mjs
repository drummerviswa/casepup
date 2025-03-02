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
                hostname:"0d1mzow7y2.ufs.sh",
            }
        ],
        domains: ["vercel.app","0d1mzow7y2.ufs.sh"]
    }
};

export default nextConfig;
