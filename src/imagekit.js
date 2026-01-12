import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  urlEndpoint: import.meta.env.VITE_IMAGEKIT_DEFAULT_URL,
  publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
  // Private key removed for security - use backend upload instead
});

export default imagekit;
