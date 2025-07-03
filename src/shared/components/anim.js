// При открытии/закрытии меню: сдвиг по Y
export const menuSlide = {
  initial: { y: "calc(-100% - 100px)" }, // из-под верха
  enter: {
    y: "0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "calc(-100% - 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
export const menuContain = {
  initial: { opacity: 0 }, // из-под верха
  enter: {
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
// Для списка пунктов меню — по порядку сверху вниз
export const slide = {
  initial: { x: 380 }, // смещение вверх на 80px
  enter: (i) => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 2, 0.5, 1],
      delay: 0.05 * i, // поочерёдно
    },
  }),
  exit: (i) => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
};
// Для списка пунктов меню — по порядку сверху вниз
export const logoText = {
  initial: { opacity: 0 }, // смещение вверх на 80px
  enter: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 2, 0.5, 1],
    },
  }),
  exit: (i) => ({
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};
// Для списка пунктов меню — по порядку сверху вниз
export const audiences = {
  initial: { opacity: 0, y: 100 }, // смещение вверх на 80px
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 2, 0.5, 1],
    },
  }),
};
