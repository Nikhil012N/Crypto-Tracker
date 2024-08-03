import axios from "axios";

/** @type {import('next').NextConfig} */
const apiUrl = process.env.NEXT_PUBLIC_BASE_URL || "/";

const pollData = async () => {
  try {
    const resp = await axios.get(`${apiUrl}api/poll`);
   return
  } catch (e) {
    console.log(e.message);
  }
};


const withPolling = (config) => {

  pollData();
  const myInterval = setInterval(async () => {
    await pollData();
  }, 6000);

  return config;
};


const nextConfig = withPolling({});

export default nextConfig;
