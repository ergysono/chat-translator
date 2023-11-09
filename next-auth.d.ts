import NextAuth, {DefaultSession} from "next-auth";

declare module "next-auth" {
  interface Session {
    firbaseToken?: string;
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
