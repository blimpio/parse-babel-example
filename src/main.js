/* global Parse */

import helloHandler from './hello/handler';
import goodbyeHandler from './goodbye/handler';


Parse.Cloud.define("hello", helloHandler);
Parse.Cloud.define("goodbye", goodbyeHandler);
