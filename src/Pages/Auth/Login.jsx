import { Link } from "react-router";

export default function Login() {
     return (
          <div className="min-h-screen flex justify-center items-center">
               <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
               <div class="flex justify-center gap-3 items-center flex-col mx-auto">
                    <img class="w-32" src="/logo.png" alt=""/>
                    <h1 className="text-4xl font-bold">Login</h1>
               </div>

               <form class="mt-6">
                    <div>
                         <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                         <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="mt-4">
                         <div class="flex items-center justify-between">
                              <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                              <a href="#" class="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                         </div>

                         <input type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="mt-6">
                         <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                              Sign In
                         </button>
                    </div>
               </form>

               <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                         or login with Social Media
                    </a>

                    <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
               </div>

               <div class="flex items-center mt-6 -mx-2">
                    <button type="button" class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                         <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                              </path>
                         </svg>

                         <span class="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>
               </div>

               <p class="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to="/register" class="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
          </div>
          </div>
     )
}
