var express = require('express');
var router = express.Router();
const fs = require('fs')
const qr = require('qr-image');
const QRCode = require('qrcode');

router.get('/message', function(req, res, next) {
  res.json('Welcome To React');
});

router.get('/retrieve', function(req,res,next) {
  const id = req.query.id
  res.send(id + ' get!' )
})

function QRGen(pw) {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(pw, function (err, url) {
      if (err) reject(new Error("error"))
      var qrcode = {img: url}
      //console.log(qrcode)
      resolve(qrcode)
    })
  })
}

router.get('/choose', (req, res, next) => {
  //console.log(req.query.id, req.query.pw)
  var id = req.query.id
  var pw = req.query.pw

  if(!id || !pw) throw err
  
  QRGen(pw).then( data => {
    res.send(data)
  })

  fs.readFile(__dirname + '/data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        AllData = JSON.parse(data); //now it an object
        AllData.order[id].push(pw)
        console.log(AllData.order)
        //AllData.order[id] = "https://i.imgur.com/K4sgvK1.gif"
        //console.log(id, AllData[id])
        AllDatastr = JSON.stringify(AllData, null, 4); //convert it back to json
        fs.writeFile(__dirname + '/data.json', AllDatastr, (err) => {
            if(err) console.log(err)
            //res.send('done')
        });
    }
  })


})

module.exports = router;
