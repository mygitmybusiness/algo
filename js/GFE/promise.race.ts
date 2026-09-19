/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    iterable.forEach(async (promise) => {
      try {
        const data = await promise;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  });
}
