import { Button } from "@nextui-org/react"
import { Provider } from "next-auth/providers"
import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }: { providers: Provider }) {
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

export async function getServerSideProps(context:any) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}