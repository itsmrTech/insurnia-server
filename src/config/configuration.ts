export default (): {
  port: number;
  mongoUrl: string;
} => ({
  port: Number(process.env.PORT) || 3000,
  mongoUrl: process.env.MONGO_URL ? process.env.MONGO_URL : '',
});
