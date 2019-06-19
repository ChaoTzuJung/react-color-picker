export default {
    up(size) {
        const screen = {
            xs: "576px",
            sm: "768px",
            md: "992px",
            lg: "1200px",
        }
        return `@media (min-width: ${screen[size]})`
    },

    down(size) {
        const screen = {
            xs: "575.98px",
            sm: "767.98px",
            md: "991.98px",
            lg: "1199.98px",
        }
        return `@media (max-width: ${screen[size]})`
    }
}