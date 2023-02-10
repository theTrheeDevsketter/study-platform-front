'use client'
function LogInButton() {

  return (
    <button type="button" className="h-7 text-white bg-black font-medium rounded-lg text-sm px-5 text-center">
      <a href="/api/auth/login">login</a>
    </button>

  )
}

export default LogInButton