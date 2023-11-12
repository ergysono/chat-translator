"use server";

import {authOptions} from "@/auth";
import {adminDb} from "@/firebase-admin";
import {getServerSession} from "next-auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function generatePortalLink() {
  console.log("hiiii");
  debugger;
  const session = await getServerSession(authOptions);
  const host = headers().get("host");

  if (!session?.user.id) {
    console.error("No user id found");
  }

  const returnUrl =
    process.env.NODE_ENV === "development"
      ? `http://${host}/register`
      : `https://${host}/register`;

  const doc = await adminDb
    .collection("customers")
    .doc("Z1YffJiEsRr06DlwZ9Xu")
    .get();

  if (!doc.data) {
    return console.error(
      "No customer record found with userId: ",
      "Z1YffJiEsRr06DlwZ9Xu"
    );
  }

  const stripeId = doc.data()!.stripeId;
  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: stripeId,
    return_url: returnUrl,
  });

  redirect(stripeSession.url);
}
