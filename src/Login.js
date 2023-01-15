import React from 'react';

export default function Login(){
	return (
	<section className="bg-white pattern-wavy pattern-indigo-600 pattern-bg-transparent pattern-opacity-100 pattern-size-8">
	  <div className="lg:grid min-h-screen lg:grid-cols-12 px-6 pt-6 lg:px-8 justify-center">
	    <div
	      className="relative flex h-full items-end lg:col-span-5 xl:col-span-6 hidden lg:block"
	    >
	      <img
	        src="https://bpeqsefkefhjnfshvrck.supabase.co/storage/v1/object/public/calls/iPhone%2013%20Pro%20Max%20-%202(3).png"
	        className="absolute inset-0 h-full w-full object-scale-down opacity-80"
	      />
	    </div>

	    <main
	      aria-label="Main"
	      className="flex justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
	    >
	      <div className="max-w-xl justify-center lg:max-w-3xl px-2 py-6 items-center">
	        <div className="relative block items-center justify-center">
	        	<div>
		        	<img 
		        		className="h-4 justify-center items-center" 
		        		src="https://bpeqsefkefhjnfshvrck.supabase.co/storage/v1/object/public/calls/calljoy.png" 
		        		alt="" 
		        	/>
	        	</div>
	        	<div>
		          <h1
		            className="pt-10 mt-2 text-4xl font-bold text-gray-900 md:text-4xl"
		          >
		          	Sign up to get your first 5 leads on us.
		          </h1>
	          </div>
	        </div>

	        <form action="/api/login" className="mt-8 grid grid-cols-6 gap-6">
	          <div className="col-span-6 sm:col-span-3">
	            <label
	              for="phone"
	              className="block text-sm font-medium text-gray-700 text-gray-200"
	            >
	              Phone number
	            </label>

	            <input
	              type="tel"
	              id="phone"
	              name="phone"
	              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border-gray-700 bg-gray-800 text-gray-200 font-bold"
	            />
	          </div>

	          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
	            <button
	              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 hover:bg-blue-700 hover:text-white"
	            >
					Sign up
	            </button>

	            <p className="mt-4 text-sm text-gray-900 font-semibold sm:mt-0">
	              Already have an account?
	              <a href="/login" className="text-gray-700 underline font-semibold text-gray-200"
	                >Log in</a
	              >.
	            </p>
	          </div>
	        </form>
			
	      </div>
	    </main>
	  </div>
	</section>
	);
}