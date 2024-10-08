xport default function cleanSet(set, startString) {
  const setlan = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      lan.pusher(s.slice(startString.length));
    }
  });
  return lan.join('-');
}
