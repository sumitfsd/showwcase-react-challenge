export default function artificialMinimumTime (action, time, minimumRunTime) {
  return function (...args) {
    const elapsed = Date.now() - time

    if (elapsed > minimumRunTime) {
      action(...args)
    } else {
      window.setTimeout(() => {
        action(...args)
      }, minimumRunTime - elapsed)
    }
  }
}
