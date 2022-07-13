import { Button } from "@nextui-org/react"
import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
          <Button css={{ zIndex:'$2' }} onPress={() => signIn(provider.id)}  key={provider.name}>
            Sign in with {provider.name}
          </Button>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}