import {WebSocketServer , WebSocket} from 'ws';
import { IncomingMessage } from "http";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({port: 8080});

wss.on("connection", function connection(ws: WebSocket, request: IncomingMessage){
    const url = request.url; // contains the complete url
    if(!url) return;
    
    /*
        http:localhost:3000?token=vfuy31v
        
        ["http:localhost:3000","token=vfuy31v"]
        [          0          ,       1       ]
    */
   
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') || "";

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    if(!decoded || !(decoded as JwtPayload).userID){
        ws.close();
        return;
    }

    ws.on("message", function message(data){
        ws.send("pong")
    })
})
