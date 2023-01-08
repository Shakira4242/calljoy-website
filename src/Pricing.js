export default function Pricing() {
	return (
		<section className="bg-white bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-white">Try us for <span className="text-rose-900 text-5xl mb-4">7 days</span></h2>
					<p className="mb-5 font-light text-gray-500 sm:text-xl text-gray-400">Blah blah blah</p>
				</div>

				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

				<div className="flex flex-col p-6 mx-auto max-w-lg text-center">
				</div>

		      	<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow border-gray-600 xl:p-8 bg-gray-800 text-white shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-blue-700">
		          <h3 className="mb-4 text-2xl font-semibold">Try us 1$ for 7 Days</h3>
		          <p className="text-white-500 sm:text-lg">Relevant for multiple users, extended & premium support.</p>
		          <div className="flex justify-center items-baseline my-8">
		              <span className="mr-2 text-5xl font-extrabold">$299</span>
		              <span className="text-gray-500 text-gray-400" text-gray-400>/year</span>
		          </div>

		          <a href="/pricing" className="text-white bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white  focus:ring-primary-900">Get started</a>
		      	</div>

			    <div className="flex flex-col p-6 mx-auto max-w-lg text-center">
				</div>
			  </div>
			</div>
		</section>
	);
}