export const PAGE_ANIMATION = {
    hidden: { scale: 0.99, opacity: 0.5 },

    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeIn",
            duration: 0.2,
            type: "tween",
        },
        transitionEnd: { display: "flex" },
    },
};
