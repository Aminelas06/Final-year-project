/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_dxS3Rl4mzXen@ep-white-bar-aa59whv0-pooler.westus3.azure.neon.tech/neondb?sslmode=require',
    }
  };