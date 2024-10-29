import { useAuth } from "../../../app/hooks/useAuth"

export function Dashboard() {
  const {signout} = useAuth()

    return (
        <>
        
          <button onClick={signout}>sair</button>
        </>
    )
}