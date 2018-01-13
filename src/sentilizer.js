const { promisify } = require('util');
let python_shell_run = promisify(require('python-shell').run);

export function sentilize(sentence){
  return new Promise(
    (resolve, reject) => {
      let options = {
        scriptPath: '/home/boesk/course_nodejs_reactjs/sentilizer_api/src',
        args: ['-s', '\"' + sentence + '\"']
      };

      python_shell_run('vader.py', options)
      .then(results => {
        let sentiment = results[0];
        let resp = { sentiment: 'Neutral'};
        if (sentiment === 'neg'){
          resp.sentiment = 'Negative';
        }
        else if (sentiment === 'pos'){
          resp.sentiment = 'Positive'
        }
        resolve(resp);
      })
      .catch(error => {
        reject(error);
      });
    }
  );
}
