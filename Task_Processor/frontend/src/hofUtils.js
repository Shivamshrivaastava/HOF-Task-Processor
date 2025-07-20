export const makeUpdater = (condition, change) => (task) =>
  condition(task) ? { ...task, ...change(task) } : task;
export const and = (...conds) => (entry) => conds.every(fn => fn(entry));

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);