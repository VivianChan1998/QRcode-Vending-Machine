![](https://i.imgur.com/RD9gwN4.png)


# QR-code Vending Machine

## How to use
```
git clone https://github.com/VivianChan1998/QRcode-Vending-Machine.git
cd QRcode-Vending-Machine/
npm install
npm start
```
enter `localhost:3000/` in browser

## How it is written
Front end: React.js
Back end: Express.js
[RPi and Arduino Code](https://github.com/TobyChen0106/ESLabSpring2019/tree/master/Final)

## How it works
![](https://i.imgur.com/MW7xc7E.png)
![](https://i.imgur.com/GLBLXPw.jpg)

1. By pressing `order!` button, front end sends a request to server, including a specified uuid and item ID.
2. Server saves the uuid in database, and generates a QRcode that includes the GET request(including the uuid in QRcode).
3. Server sends the QRcode to Front end.
4. User scans the QR-code at the machine.
5. The vending machine sends the url in the QRcode to the server.
6. Server compares what it reserved with the database, to assure the order exists.
7. Server tells the machine if the order exists or not, which item id it is, and dispense the item.


## :)



