function chunked(total, chunkSize, onDone) {
    let i = 0;
    let sum = 0;
    function tick() {
      const end = Math.min(i + chunkSize, total);
      while (i < end) {
        sum += i;
        i++;
      }
      if (i < total) {
        setTimeout(tick, 0);
      } else {
        onDone(sum);
      }
    }
    tick();
  }
  
  chunked(1e7, 1e6, (sum) => console.log('done', sum));