export default function cleanSet(set, startString) {
  const setLan = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      setLan.push(s.slice(startString.length));
    }
  });
  return setLan.join('-');
}
