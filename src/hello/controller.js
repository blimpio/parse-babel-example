import Hello from './model';

export default (request, response) => {
  var hello = new Hello();
  response.success(hello.greeting());
};
