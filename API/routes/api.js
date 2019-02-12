import { Router } from "express";
const router = new Router();

// API WORKS
router.get("/", (req, res) => {
  res.send("Go on Little Batman!");
});

router.get("/hellos", (req, res) => {
  res.send(Array(5).fill("Hello!"));
});

router.get("/hello", (req, res) => {
  res.send("Yep! Hello!");
});

export default router;
