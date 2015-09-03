import Goodbye from './model';

export default (request, response) => {
  var goodbye = new Goodbye();
  response.success(goodbye.greeting());
};
