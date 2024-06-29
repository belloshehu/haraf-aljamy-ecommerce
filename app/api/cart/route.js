import { getServerSession } from "next-auth/next";
import authOptions from "../../utils/authOptions";
import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const session = await getServerSession(authOptions);

  try {
    if (!session?.user) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: StatusCodes.UNAUTHORIZED }
      );
    }

    if (!body) {
      return NextResponse.json(
        { message: "Cart Item required" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const items = await prisma.cartItem.findMany({
      where: {
        userId: session.user.id,
      },
    });
    console.log(items);

    return NextResponse.json(
      { message: "Cart item created", cartItems: items },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.log(error);
    return new Error(error.message);
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  const body = await request.json();
  console.log(body, session);

  try {
    if (!session?.user) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: StatusCodes.UNAUTHORIZED }
      );
    }

    if (!body) {
      return NextResponse.json(
        { message: "Cart Item required" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const createdCartItem = await prisma.cartItem.create({
      data: {
        userId: session.user.id,
        productId: body.id,
      },
    });
    console.log(createdCartItem);

    return NextResponse.json(
      { message: "Cart item created", cartItem: createdCartItem },
      { status: StatusCodes.CREATED }
    );
  } catch (error) {
    console.log(error);
    return new Error(error.message);
  }
}

export async function PATCH(request) {
  const session = await getServerSession(authOptions);
  const body = await request.json();

  try {
    if (!session?.user) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: StatusCodes.UNAUTHORIZED }
      );
    }

    if (!body) {
      return NextResponse.json(
        { message: "Cart Item required" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const updatedCartItem = await prisma.cartItem.update({
      where: {
        userId: session.user.id,
        productId: body.id,
      },
      data: {
        quantity: body.quantity,
      },
    });
    console.log(updatedCartItem);

    return NextResponse.json(
      { message: "Cart item updated", cartItem: updatedCartItem },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.log(error);
    return new Error(error.message);
  }
}

export async function DELETE(request) {
  const session = await getServerSession(authOptions);
  const body = await request.json();

  try {
    if (!session?.user) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: StatusCodes.UNAUTHORIZED }
      );
    }

    if (!body) {
      return NextResponse.json(
        { message: "Cart Item required" },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    const deletedCartItems = await prisma.cartItem.delete({
      where: {
        userId: session.user.id,
      },
    });
    console.log(deletedCartItems);

    return NextResponse.json(
      { message: "Cart items deleted", cartItem: deletedCartItems },
      { status: StatusCodes.OK }
    );
  } catch (error) {
    console.log(error);
    return new Error(error.message);
  }
}
