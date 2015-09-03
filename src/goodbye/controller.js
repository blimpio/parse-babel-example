import Goodbye from './models';

export default (request, response) => {
  var goodbye = new Goodbye();
  response.success(goodbye.greeting());
};
