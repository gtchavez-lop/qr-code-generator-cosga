export const _Page_Transition = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'circOut',
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      ease: 'circIn',
    },
  },
};
