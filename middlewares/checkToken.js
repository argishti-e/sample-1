const checkToken = (req, res, next)=>{
  if(req.headers['x-token']){

    // todo logic

    const userId = 10;

    req.userId = userId;

    next();
    return;
  }

  res.status(401).send({
    message: 'Unauthorized',
  });
}

export default checkToken;
