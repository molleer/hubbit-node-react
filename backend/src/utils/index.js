const to = promise => {
  if (Array.isArray(promise)) {
    return Promise.all(promise)
      .then(res => [null, res])
      .catch(err => [err, []]);
  }

  return promise
    .then(data => {
      return [null, data];
    })
    .catch(err => [err]);
};
