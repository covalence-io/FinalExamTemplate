import jwt from "jsonwebtoken";
import config from "../config";
import type { RequestHandler } from "express";
import { Payload } from "../types";

const tokenCheck: RequestHandler = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Missing auth headers" });
    }

    const [type, token] = req.headers.authorization.split(" ");

    if (!type || !token || type.toLowerCase() !== "bearer") {
        return res.status(401).json({ message: "Incorrect auth type (must be bearer token)" });
    }

    jwt.verify(token, config.jwt.secret, (err, payload) => {
        if (err) {
            return res.status(401).json({ message: err.message });
        } else {
            req.user = payload as Payload;
            next();
        }
    });
};

export default tokenCheck;
