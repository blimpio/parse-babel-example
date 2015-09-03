/* global Parse */
import HelloController from './hello/controller';
import GoodbyeController from './goodbye/controller';

Parse.Cloud.define('hello', HelloController);
Parse.Cloud.define('goodbye', GoodbyeController);
