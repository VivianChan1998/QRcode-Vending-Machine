var express = require('express');
var router = express.Router();
const fs = require('fs')
const qr = require('qr-image');
const QRCode = require('qrcode');

const host = "140.112.77.220"

router.get('/message', function(req, res, next) {
  res.json('Hello:)');
});

router.get('/retrieve', function(req,res,next) {
  const id = req.query.id
  const pw = req.query.pw
  //res.send(id + ' get!' )
  fs.readFile(__dirname + '/data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        AllData = JSON.parse(data);
        data = AllData.order[id];
        if(data === undefined) res.send("ID ERROR")
        else if (data.includes(pw)) {
          console.log(":D!!!!!!!")
          res.send(id)
        }
        else {
          console.log(":(((((((")
          res.send("PW ERROR")
        }
    }
  })
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
  
  var link = host + ':3001/api/retrieve?id=' + id + '&pw=' + pw
  console.log(link)

  QRGen(link).then( data => {
    res.send(data)
  })

  fs.readFile(__dirname + '/data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        AllData = JSON.parse(data); //now it an object
        AllData.order[id].push(pw)
        //console.log(AllData.order)
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
