
import jwt from "jsonwebtoken";

const tokenverify = (req, res, next) => {
   
    let token = req.headers['authorization']
    token= token.split("Bearer ")[1]
   
    try {
        if (!token) {
            res.send("token is missing")
        }
        jwt.verify(token, "surajsinghhdfjdnxkjcbskjbvsbcsmcjscdjhjcjfjhccdhjhbv", (err, decode) => {
            if (err) {
                res.status(401).send({ message: "Unauthorized!" })
            }
            else {
                req.name = decode.id; 
                next() 
            }
        })
    }
    catch (err) {
        res.status(401).send({ message: " internal error ", err })
        console.log("the Error is ", err)
    }
}

export default {
    tokenverify
}



