import React from 'react';

import supabase from './auth.js';

// navigate

import { useNavigate } from 'react-router-dom';

import fetch from 'node-fetch';

import { DateTime } from "luxon";

export default function Dashboard(){
	const navigate = useNavigate();

	const [menuOpen, setMenuOpen] = React.useState(false);

	const [user, setUser] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

	const [searchTerm, setSearchTerm] = React.useState(null);
	const [openAIdata, setOpenAIdata] = React.useState(null);
	const [searchResults, setSearchResults] = React.useState(null);

	const [customerData, setCustomerData] = React.useState(null);
	const [lastCustomer, setLastCustomer] = React.useState(null);

	React.useEffect(() => {
		setLoading(true);

		supabase.auth.getUser().then((user) => {
			if(user.data?.user == null){
				navigate("/")
			}

			// remove first character from user.data.user.phone
			var phone = user.data.user.phone.substring(1);

			supabase.from('Outreach').select('*').eq('business_phone, first_lead_phone_number, potential_text', user.data.user.phone.substring(1)).then((data) => {
				const date = DateTime.fromISO(data.data[0].last_customer_time)
				const now = date.toRelativeCalendar()

				console.log(date)

				if(date.toObject().hour > 12){
					setLastCustomer(data.data[0].first_lead_phone_number + " reached out " + now + " at " + String(date.toObject().hour - 12) + ":" + String(date.toObject().minute).padStart(2, '0') + " PM and said: '" + data.data[0].potential_text + "'")
				}else{
					setLastCustomer(data.data[0].first_lead_phone_number + " reached out " + now + "at" + String(date.toObject().hour) + ":" + String(date.toObject().minute).padStart(2, '0') + " AM and said: '" + data.data[0].potential_text + "'")
				}

			})

			setLoading(false);
		});
	}, []);

	function handleClick(){

		(async () => {
			// make a request to open ai api
			const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer process.env'
				},
				body: JSON.stringify({
					prompt: openAIdata + "\n" + searchTerm + "\n",
					temperature: 0.7,
					max_tokens: 200,
					top_p: 1,
					frequency_penalty: 0,
					presence_penalty: 0
				})
			});

			const json_response = await response.json();
			console.log(json_response.choices[0].text)
			setSearchResults(json_response.choices[0].text)
		})();

	}

	return (
		<div classNameName="bg-black">
			{!loading ?
				<div classNameName="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">

					{/* Header */}

					<header aria-label="Site Header" className="bg-black">
					  <div
					    class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
					  >
					    <div class="flex flex-1 items-center justify-end">

					      <div class="flex items-center gap-4">

					        <button
					          class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
					          onClick={() => setMenuOpen(!menuOpen)}
					        >
					          <span class="sr-only">Toggle menu</span>
					          <svg
					            xmlns="http://www.w3.org/2000/svg"
					            class="h-5 w-5"
					            fill="none"
					            viewBox="0 0 24 24"
					            stroke="currentColor"
					            stroke-width="2"
					          >
					            <path
					              stroke-linecap="round"
					              stroke-linejoin="round"
					              d="M4 6h16M4 12h16M4 18h16"
					            />
					          </svg>
					        </button>
					      </div>
					    </div>
					  </div>
					</header>


					{/* Menu */}
					{menuOpen ? 
						<div class="flex flex-col justify-between h-screen bg-black border-r">
							<div class="px-4 py-6">
								
								<nav aria-label="Main Nav" class="flex flex-col mt-6 space-y-1">
									<a
										href="/dashboard"
										class="flex items-center px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800"
									>
										<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-5 h-5 opacity-75"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
										>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										</svg>

										<span class="ml-3 text-sm font-medium">Users</span>
									</a>

									<nav>
										<button
											type="submit"
											className="flex items-center w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-gray-800"
											onClick={() => {
												// logout()
												supabase.auth.signOut()
												navigate('/')
											}}
											>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="w-5 h-5 opacity-75"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
											>
												<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
												/>
											</svg>

											<span class="ml-3 text-sm font-medium"> Logout </span>
										</button>
									</nav>
								</nav>
							</div>
						</div>
				    	: 
						<></>
					}

					<article
					  class="flex flex-col gap-4 rounded-lg bg-black p-6"
					>
					  <div>
					    <strong class="block text-lg font-bold text-white">You are currently on a free trial</strong>
					    <p>
					      <span class="text-2xl font-medium text-white"></span>
					    </p>
					  </div>
					</article>

					<article
					  class="flex flex-col gap-4 rounded-lg bg-black p-6"
					>
					  <div>
					    <strong class="block text-lg font-bold text-white">{lastCustomer}</strong>
					    <p>
					      <span class="text-2xl font-medium text-white"></span>
					    </p>
					  </div>
					</article>

					<article
					  class="flex flex-col gap-4 rounded-lg bg-black p-6"
					>
					  <div>
					    <strong class="block text-lg font-bold text-white">Get 5 leads for 25$ a month texted to your phone</strong>
					  </div>
					</article>

					<div className="flex flex-col gap-4 rounded-lg bg-black p-6">
						<button 
							className="block bg-blue-500 rounded-lg text-white px-5 py-2 items-center font-bold"
							onClick={()=> {
								window.location.href = 'https://square.link/u/S6M7W4fd'
							}}
						>
							Sign up 
						</button>
					</div>

					{/* input field for open ai search
					<div classNameName='flex flex-col items-center justify-center'>
						<input
							classNameName='w-1/2 h-10 rounded-lg border-2 border-gray-200'
							type='text'
							placeholder='Search'
							onChange={(e) => setSearchTerm(e.target.value)}
						/>

						<button
							classNameName='w-1/2 h-10 rounded-lg border-2 border-gray-200'
							onClick={handleClick}
						>
							Search
						</button>

						<div>
							{searchResults ? (
								<div>
									<p classNameName='text-white'>{searchResults}</p>
								</div>
							) : (
								<div>
									<p classNameName='text-white'>Loading...</p>
								</div>
							)}
						</div>
					</div> */}
				</div>	
				:
				<div>
				<p className='text-white'>Loading...</p>
				</div>
			}	
		</div>
	);
}