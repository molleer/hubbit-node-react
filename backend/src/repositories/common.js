const toPromise = (query, query_string, variables) =>
  new Promise((resolve, reject) => {
    query(query_string, variables, (err, res) =>
      err !== null ? reject(err) : resolve(res),
    );
  });

module.exports = { toPromise };
