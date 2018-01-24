var express = require('express')

/*app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
*/
export default {
        init(){
            this._app = express();
            return this;
        },
        start(port) {
            this._app.listen(port,()=>console.log('run @'+port))
        },
        get(route,cb) {
            this._app.get(route,cb);
            return this;
        }
}
