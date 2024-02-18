import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    if (!firstName) {
      return NextResponse.json(
        { message: "Last name is required" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    if (!lastName) {
      return NextResponse.json(
        { message: "Last name is required" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    if (!password) {
      return NextResponse.json(
        { message: "password is required" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const exists = await prisma.user.findUnique({ where: { email } });

    if (exists) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        user,
        message: "User registered!",
      },
      { status: 200 }
    );
  } catch (error) {
    return new Error(error.message);
  }
}
