const colorSequency = (total) => {
  const result = [1];
  for (let i = 0; i < total; i += 1) {
    const latest = result[result.length - 1];
    if (latest % 2 === 1) {
      result.push(latest + 3);
    } else {
      result.push(latest + 1);
    }
  }
  return result;
};

export default colorSequency;
