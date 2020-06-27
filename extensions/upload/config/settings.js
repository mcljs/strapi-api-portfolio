
  // extensions/upload/config/settings.js
  if (process.env.NODE_ENV === 'production') {
    module.exports = {  
      "provider": "cloudinary",  
      "providerOptions": {
        "cloud_name": "${process.env.CLOUDINARY_NAME || 'mcljs'}",
        "api_key": "${process.env.CLOUDINARY_API_KEY || '134179457865265'}",
        "api_secret": "${process.env.CLOUDINARY_API_SECRET || 'm3u0QyI00lxTHg6sn94GlnOxVsU'}"
      }
    };
  } else {
    module.exports = {};
  }