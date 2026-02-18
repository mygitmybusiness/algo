// Розбиття на партиції з локальною площею
function partitionIntervalsWithArea(intervals) {
  const cuts = [...new Set(intervals.flatMap(iv => [iv.start, iv.end]))].sort((a, b) => a - b);
  const parts = [];

  for (let i = 0; i < cuts.length - 1; i++) {
    const a = cuts[i], b = cuts[i + 1];
    const height = b - a;
    if (height <= 0) continue;

    const covering = intervals.filter(iv => iv.start < b && iv.end > a);
    if (!covering.length) continue;

    const widthSum = covering.reduce((s, iv) => s + iv.size, 0);
    const area = widthSum * height;

    parts.push({ start: a, end: b, widthSum, area });
  }
  return parts;
}

// Пошук точки y*, де площа зліва == площі справа
function findMedianCutY(parts) {
  const total = parts.reduce((s, p) => s + p.area, 0);
  if (total === 0) return null;

  const target = total / 2;
  let acc = 0;

  for (const p of parts) {
    if (acc + p.area >= target) {
      const need = target - acc;                 // скільки площі треба додати в цій партиції
      const dy = need / p.widthSum;              // бо площа росте лінійно: area = widthSum * dy
      return { y: p.start + dy, totalArea: total };
    }
    acc += p.area;
  }
  // Якщо не знайшли (майже неможливо при коректних даних) — остання межа
  const last = parts[parts.length - 1];
  return { y: last.end, totalArea: total };
}

// ===== Приклад використання =====
const data = [
  {x: 0, y:1.0, size: 5.0},
  {x: 0, y:8.0, size: 1.0},
  {x: 0, y:2.0, size: 2.0},
  {x: 0, y:5.0, size: 4.0},
  {x: 0, y:12.0, size: 3.0}
];

const intervals = data.map(d => ({ start: d.y, end: d.y + d.size, size: d.size }));
const parts = partitionIntervalsWithArea(intervals);
const result = findMedianCutY(parts);

console.log(parts);
console.log('Median cut:', result);