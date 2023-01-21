import React from 'react';

import supabase from './auth.js';

// navigate

import { useNavigate } from 'react-router-dom';

import fetch from 'node-fetch';

import { DateTime } from "luxon";

import { Link } from "react-router-dom";

export default function Dashboard(){
	const navigate = useNavigate();

	const [menuOpen, setMenuOpen] = React.useState(false);

	const [user, setUser] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

	const [searchTerm, setSearchTerm] = React.useState(null);
	const [openAIdata, setOpenAIdata] = React.useState(null);
	const [searchResults, setSearchResults] = React.useState(null);


	const [lastCustomerMessage, setLastCustomerMessage] = React.useState(null);


	const [customerData, setCustomerData] = React.useState(null);
	const [lastCustomer, setLastCustomer] = React.useState(null);

	const [plan, setPlan] = React.useState(null);

	const [customerPhone, setCustomerPhone] = React.useState(null);
	const [lastTimeCustomerReachedOut, setlastTimeCustomerReachedOut] = React.useState(null);

	React.useEffect(() => {
		setLoading(true);

		supabase.auth.getUser().then((user) => {
			if(user.data?.user == null){
				navigate("/")
			}

			// remove first character from user.data.user.phone
			var phone = user.data.user.phone.substring(1);

			supabase.from('Outreach').select('*').eq('business_phone, first_lead_phone_number, potential_text, plan', user.data.user.phone.substring(1)).then((data) => {
				const date = DateTime.fromISO(data.data[0].last_customer_time)
				const now = date.toRelativeCalendar()

				setPlan(data.data[0].plan);

				console.log(date);

				console.log(data.data[0].plan)

				setCustomerPhone(data.data[0].first_lead_phone_number);

				setlastTimeCustomerReachedOut("commented " + now);

				setLastCustomerMessage(data.data[0].potential_text);

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
		<div className="bg-white">
			{!loading ?
				<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">

					{/* Header */}

					<header aria-label="Site Header" className="bg-white">
					  <div
					    class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
					  >
					    <div class="flex flex-1 items-center justify-end">

					      <div class="flex items-center gap-4">

					        <button
					          class="block rounded bg-gray-100 p-2.5 text-black transition hover:text-gray-600/75"
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
						<div class="flex flex-col justify-between h-screen border-r">
							<div class="px-4 py-6">
								
								<nav aria-label="Main Nav" class="flex flex-col mt-6 space-y-1">
									<button
										type="submit"
										className="flex items-center px-4 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-800"
										onClick={()=> {
											console.log('hello')
											navigate("/dashboard");
											setMenuOpen(!menuOpen);
										}}
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 opacity-75">
										  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
										</svg>

										<span class="ml-3 text-sm font-medium">Customers</span>
									</button>


									<button
										type="submit"
										className="flex items-center px-4 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-800"
										onClick={() => {
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
							</div>
						</div>
				    	: 
						<></>
					}

					{/* Plan */}

					<article
					  className="flex flex-col rounded-lg bg-white p-6"
					>
					  <div>
					    <strong className="block text-lg font-bold text-black">Recent customers</strong>
					  </div>
					</article>


					{/* Timeline */}

					<div className="flex flex-col gap-2 rounded-lg bg-white p-2">
					  <ul role="list" class="-mb-8">
					    <li className="bg-gray-100 mt-2 rounded-lg p-4">
					      <div class="relative">
					        <div class="relative flex items-start space-x-3">
					          <div class="px-2 py-2">
					              <svg class="h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
					              </svg>
					          </div>
					          <div class="min-w-0 flex-1">
					            <div>
					              <h1 className="mt-0.5 text-lg text-black">{customerPhone}</h1>
					            </div>
					            <div>
					              <p className="mt-0.5 text-sm text-black">{lastTimeCustomerReachedOut}</p>
					            </div>
					            <div className="py-6 px-4 bg-gray-200 rounded-lg mr-4 mb-4 mt-4">
					            	<p className="text-sm font-bold text-black">{lastCustomerMessage}</p>
					            </div>
					            <button
									className="rounded-lg bg-black px-4 py-2 hover:bg-gray-500 text-white"
									onClick={()=>{
										window.location.href = "sms:+1" + customerPhone
									}}
								>
									text
					            </button>
					          </div>
					        </div>
					      </div>
					    </li>

					  </ul>
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
				<p className='text-black'>Loading...</p>
				</div>
			}	
		</div>
	);
}