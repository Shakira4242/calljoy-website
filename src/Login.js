import React from 'react';

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import supabase from './auth.js';

export default function Login(){
	const navigate = useNavigate();

	React.useEffect(() => {
		console.log('helloooooo!')
		supabase.auth.getUser().then((user) => {
			console.log(user.data.user)
			if(user.data.user){
				navigate("/dashboard")
			}
		});
	}, []);

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  	const onSubmit = (data) => {
		// make a get request to the api/login.js
		// pass the phone number
		console.log(data.phone)

		// check if number is 10 digits
		
		if(data.phone.length == 10){
			console.log('10 digits')
		}else{
			console.log('not 10 digits')
		}

		function toE164(num) {
			let newNum = num.replace(/[^\d]/g, '');
			if (newNum.length === 10) {
				newNum = '+1' + newNum;
			} else if (newNum.length > 10) {
				newNum = '+' + newNum;
			}
		
			return newNum;
		}

		// format phone number to E.164 format for twilio

		const phone = toE164(data.phone)
		


		supabase.auth.signInWithOtp({'phone': phone})
		.then(({ data, error }) => {
			if(error) {
				console.log(error)
			}else{
				console.log(data)
			}
		})

		navigate("/otp", {
			state: {
				'phone': phone
			}
		});
	}
	
	return (
	<section className="bg-gray-900 dark:bg-white">
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
		          	Get 5 leads this month
		          </h1>
	          </div>
	        </div>

	        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
	          <div className="col-span-6 sm:col-span-3">
	            <label
	              for="phone"
	              className="block text-sm font-medium text-gray-700 dark:text-gray-700"
	            >
	              Phone number
	            </label>

	            <input
	              type="tel"
	              id="phone"
	              name="phone"
	              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border-gray-700 bg-gray-800 text-gray-200 font-bold"
				  {...register("phone", { required: true })}
	            />
	          </div>

	          	<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
					<button
					className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 hover:bg-blue-700 hover:text-white"
					>
						Sign up
					</button>
	          	</div>

				<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
					<p className="mt-4 text-sm text-gray-900 font-semibold sm:mt-0">
						Already have an account?{" "}
						<a href="/login" className="dark:text-gray-700 underline font-semibold text-gray-200">
							Log in
						</a>.
					</p>
				</div>
	        </form>
			
	      </div>
	    </main>
	  </div>
	</section>
	);
}