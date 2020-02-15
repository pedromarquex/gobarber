// middleware que mostra no console a requisição que foi feita na url

export default function logs(req, res, next) {
  console.log(`${req.method} at ${req.url}`);
  return next();
}
