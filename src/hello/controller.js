import Hello from './models';

export default (request, response) => {
  var hello = new Hello();
  response.success(hello.greeting());
};
