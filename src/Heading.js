
export default function Heading() {
  return (
	<main>
		<div className="relative px-6 lg:px-8 bg-gray-800 text-white">
		  <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pb-40">
		    <div>
		      <div>
		        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl mt-8">
		       		We work hard so you can relax
		        </h1>
		      	<div className="border-8 border-indigo-500/100 rounded-lg mt-8">
		        	<video class="w-full" autoPlay loop muted>
							  <source src="https://bpeqsefkefhjnfshvrck.supabase.co/storage/v1/object/public/calls/demo_video.mp4" type="video/mp4"/>
							</video>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</main>
  );
}