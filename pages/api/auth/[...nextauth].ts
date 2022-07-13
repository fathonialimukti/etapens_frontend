import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import GitHubProvider from "next-auth/providers/github"
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

        // CognitoProvider({
        //     clientId: process.env.COGNITO_CLIENT_ID,
        //     clientSecret: process.env.COGNITO_CLIENT_SECRET,
        //     issuer: process.env.COGNITO_ISSUER,
        // }),
    ],
    // pages: {
    //     signIn: '/auth/signin', // custom login page
    //     error: '/auth/error', // custom login error page
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    // },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
    }
})