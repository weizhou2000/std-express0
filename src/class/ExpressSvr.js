var express = require('express')

/*app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
*/
export default class ExpressSvr {
        constructor() {
            this._app = express();
        };
        start(port) {
            this._app.listen(port,()=>console.log('run @'+port))
        };
        get(route,cb) {
            return this._app.get(route,cb);
        };
}
