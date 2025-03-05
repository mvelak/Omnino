import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0",
            scope: "tweet.read tweet.write users.read",
            authorization: {
                params: {
                    scope: "tweet.read tweet.write users.read",
                    response_type: "code",
                    code_challenge_method: "S256",
                },
            },
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.id = token.id;
            session.accessToken = token.accessToken;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.id = user.id;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
    },
});
