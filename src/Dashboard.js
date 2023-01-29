import supabase from './auth.js';

// navigate

import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import fetch from 'node-fetch';

import { DateTime } from "luxon";


const people = [
	{ channel: 'facebook', text: '3109874586'},
	{ channel: 'nextdoor', text: '3239919410'},
	// More people...
]

export default function Dashboard(){
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);

	const [leads, setLeads] = useState([])

	useEffect(() => {
		setLoading(true);

		supabase.auth.getUser().then((user) => {
			if(user.data?.user == null){
				navigate("/")
			}

			// remove first character from user.data.user.phone
			var phone = user.data.user.phone.substring(1);

			supabase.from('Outreach').select('*').eq('business_phone', phone).then((data) => {
				console.log(data.data[0].first_lead_phone_number)
				console.log(data.data[0].second_lead_phone_number)
				setLeads([
					{
						channel: 'facebook',
						text: data.data[0].first_lead_phone_number
					},
					{
						channel: 'nextdoor',
						text: data.data[0].second_lead_phone_number
					}
				])
			});

			setLoading(false);
		});
	}, []);


	return (
		<div className="bg-black h-screen">
			{!loading ?
				<div className="px-4 sm:px-6 lg:px-8 bg-black">
					<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-white py-8">New Leads</h1>
						<p className="mt-2 text-sm text-white">
							A list of new customers in your account including their name, channel, and text details.
						</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
						<button
						type="button"
						className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
						onClick={() => {
							supabase.auth.signOut();
							navigate("/");
						}}
						>
						Sign out
						</button>
					</div>
					</div>
					<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-300">
							<thead className="bg-gray-50">
								<tr>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Channel
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Text
								</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{leads.map((person) => (
								<tr key={person.text}>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.channel}</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										<p className='inline-block pr-4'>
										{person.text}
										</p>
										<button
											className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
									 		onClick={()=> window.location.href = "sms:" + "+1" + person.text}
										>Text now
										</button>
									</td>
								</tr>
								))}
							</tbody>
							</table>
						</div>
						</div>
					</div>
					</div>
			  	</div>
				:
				<div>
				<p className='text-white'>Loading...</p>
				</div>
			}	
		</div>
	);
}