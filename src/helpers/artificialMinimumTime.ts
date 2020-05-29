export default function artificialMinimumTime(action: Function, time: number, minimumRunTime: number) {
  return function (...args: object[]) {
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
