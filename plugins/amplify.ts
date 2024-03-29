import { Amplify } from "aws-amplify"
import { signIn, signOut, signUp } from "aws-amplify/auth"
import awsExports from "../aws-exports"

export default defineNuxtPlugin(nuxtApp => {
  Amplify.configure(awsExports)

  return {
    provide: {
      auth: {
        signIn,
        signOut,
        signUp
      }
    }
  }
})
