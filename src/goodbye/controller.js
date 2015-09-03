import { sayGodbye } from './models';

export default (request, response) => {
  response.success(sayGodbye());
};
