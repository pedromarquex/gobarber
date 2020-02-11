export default function logs (req, res, next) {
    console.log(`${req.method} at ${req.url}`);
    return next();
};