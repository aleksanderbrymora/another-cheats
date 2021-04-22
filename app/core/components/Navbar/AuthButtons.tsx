import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Link, useMutation } from "blitz"

const AuthButtons = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  const handleLogout = async () => await logoutMutation()

  return (
    <div className="flex items-center justify-between space-x-3">
      {currentUser?.id ? (
        <button className="whitespace-nowrap dark:text-gray-100" onClick={handleLogout}>
          Sign out, {currentUser.email}
        </button>
      ) : (
        <>
          <Link href="/login">
            <a className="whitespace-nowrap hover:underline dark:text-gray-100">Login</a>
          </Link>
          <Link href="/signup">
            <a className="whitespace-nowrap hover:underline dark:text-gray-100">Sign up</a>
          </Link>
        </>
      )}
    </div>
  )
}

export default AuthButtons
