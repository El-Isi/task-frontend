export const config = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return {
        baseURL: 'http://localhost:3001/api',
      };
    case 'production':
      return {
        baseURL: 'https://parent-lab-task-backend.herokuapp.com/api',
      };
    default:
      return {
        baseURL: 'http://localhost:3001/api',
      };
  }
};
