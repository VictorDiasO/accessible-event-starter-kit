function handler(req, res) {
  res.redirect('/finished');
  console.log("Api chamada;")
  res.status(200).redirect('/finished');
}

export default handler;