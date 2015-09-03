import { sayHello } from './models';

export default (request, response) => {
  response.success(sayHello());
};
