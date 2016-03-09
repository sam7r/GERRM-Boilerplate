import request from 'superagent';
import debug from 'debug';
import config from '../config';

const url = `${config.appServer}:${config.appServerPort}/${config.graphqlEndpoint}`

const API = {
  fetch: (query) => {
    request
      .post(url)
      .query(query)
      .end(function (err, res) {
        debug(err || res);
        return res;
      })
    }
}

export default API;
