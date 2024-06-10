import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//get all users from the database
router.get("/users", async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
});

//add user to the database
router.post("/users", async (req, res) => {
  const { workspaceName, email,address } = req.body;
  const users = await prisma.users.create({
    data:{
      workspaceName,
      email,
      address
    },

    });
    res.json(users);
    
  });

export default router;
