import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-white dark:bg-gray-900 lg:grid lg:grid-cols-5">
		  <div className="relative block h-32 lg:col-span-2 lg:h-full">
		    <img
		      src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
		      alt=""
		      className="absolute inset-0 object-cover w-full h-full"
		    />
		  </div>

		  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
		    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
		      <div>
		        <p>
		          <span className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
		            Call us
		          </span>

		          <a
		            href="tel:+12107128563"
		            className="block text-2xl font-medium text-gray-900 dark:text-white hover:opacity-75 sm:text-3xl"
		          >
		            2107128563
		          </a>
		        </p>

		        <ul className="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
		          <li>Monday to Friday: 10am - 5pm</li>
		        </ul>

		      </div>

		      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
		        <div>
		          <p className="font-medium text-gray-900 dark:text-white">Services</p>

		          <nav aria-label="Footer Navigation - Services" className="mt-6">
		            <ul className="space-y-4 text-sm">
		              <li>
		                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
		                  1on1 Coaching
		                </a>
		              </li>

		              <li>
		                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
		                  Company Review
		                </a>
		              </li>

		              <li>
		                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
		                  Accounts Review
		                </a>
		              </li>

		              <li>
		                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
		                  HR Consulting
		                </a>
		              </li>

		              <li>
		                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
		                  SEO Optimisation
		                </a>
		              </li>
		            </ul>
		          </nav>
		        </div>

		        <div>
		          <p className="font-medium text-gray-900 dark:text-white">Company</p>

		          <nav aria-label="Footer Navigation - Company" className="mt-6">
		            <ul className="space-y-4 text-sm">
		              <li>
		                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
		                  About
		                </a>
		              </li>

		              <li>
		                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
		                  Meet the Team
		                </a>
		              </li>

		              <li>
		                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
		                  Accounts Review
		                </a>
		              </li>
		            </ul>
		          </nav>
		        </div>
		      </div>
		    </div>

		    <div className="pt-12 mt-12 border-t border-gray-100">
		      <div className="sm:flex sm:items-center sm:justify-between">
		        <nav aria-label="Footer Navigation - Support">
		          <ul className="flex flex-wrap gap-4 text-xs">
		            <li>
		              <a href="#" className="text-gray-500 transition hover:opacity-75">
		                Terms & Conditions
		              </a>
		            </li>

		            <li>
		              <a href="#" className="text-gray-500 transition hover:opacity-75">
		                Privacy Policy
		              </a>
		            </li>

		            <li>
		              <a href="#" className="text-gray-500 transition hover:opacity-75">
		                Cookies
		              </a>
		            </li>
		          </ul>
		        </nav>

		        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
		          &copy; 2022. Company Name. All rights reserved.
		        </p>
		      </div>
		    </div>
		  </div>
		</footer>

  );
}

export default Footer;