/**
 * Easing function for smooth animation
 * @param {Number} time - The current time of the animation
 * @return {Number} - The eased value
 */
const easing = (time) => 1 - (--time) * time * time * time;

/**
 * Given a start/end point of a scroll and time elapsed, calculate the scroll position we should be at
 * @param {Number} start - The initial value
 * @param {Number} end - The final desired value
 * @param {Number} elapsed - The amount of time elapsed since we started animating
 * @param {Number} duration - The duration of the animation
 * @return {Number} - The value we should use on the next tick
 */
const getValue = (start, end, elapsed, duration) => {
  if (elapsed > duration) return end;
  return start + (end - start) * easing(elapsed / duration);
};

/**
 * Smoothly animate between two values
 * @param {Number} fromValue - The initial value
 * @param {Number} toValue - The final value
 * @param {Function} onUpdate - A function that is called on each tick
 * @param {Function} onComplete - A callback that is fired once the scroll animation ends
 * @param {Number} duration - The desired duration of the scroll animation
 */
export default function animate({
  fromValue,
  toValue,
  onUpdate,
  onComplete,
  duration = 600,
}) {
  const startTime = performance.now();

  const tick = () => {
    const elapsed = performance.now() - startTime;

    onUpdate(getValue(fromValue, toValue, elapsed, duration));

    if (elapsed <= duration) {
      window.requestAnimationFrame(tick);
    } else if (onComplete) {
      onComplete();
    }
  };

  window.requestAnimationFrame(tick);
};
