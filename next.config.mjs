/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.accredible.com',
          port: '',
          pathname: '/v1/frontend/credential_website_embed_image/certificate/104948593',
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          port: '',
          pathname: '/7J6Fzfn/codeimage-snippet-2.png',
        },
        {
          protocol: 'https',
          hostname: 'svgshare.com',
          port: '',
          pathname: '/i/16jS.svg',
        },
      ],
    },
  };
  
  export default nextConfig;
  