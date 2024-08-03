import axios from 'axios';

/** @type {import('next').NextConfig} */
const apiUrl = process.env.BASE_URL || 'http://localhost:3000';
const withPolling= (config)=>{
    setInterval(async()=>{
        await axios.get(`${apiUrl}/api/poll`);
    },6000)
   
    return config
}
const nextConfig =withPolling({});

export default nextConfig;
