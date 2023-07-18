"use client";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
 
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {
  return (
    <div>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  <div className="relative isolate overflow-hidden bg-gray-900  sm:py-10">
  <img
    src="https://www.pixelstalk.net/wp-content/uploads/2016/05/Desktop-gaming-backgrounds-1080p-dosh-tosh.jpg"
    alt=""
    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
  />
  <div
    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    aria-hidden="true"
  >
    <div
      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
  

    <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">Welcome to our Company</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to [Just-In], your gateway to unforgettable travel experiences. We are a leading travel and tour company dedicated to creating exceptional journeys for adventurers, explorers, and wanderers like you.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Apply
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
            <img src="https://getwallpapers.com/wallpaper/full/6/8/d/489168.jpg" alt="mockup" class="rounded-lg"/>
        </div>                
    </div>
</section>

<div
    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    aria-hidden="true"
  >
    <div
      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Work with us</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        fugiat veniam occaecat fugiat aliqua.
      </p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name} <span aria-hidden="true">&rarr;</span>
          </a>
        ))}
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col-reverse">
            <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>

  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Just-In</span>
        </a>
        <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-yellow-900 tracking-widest text-sm mb-3">SOCIAL</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Twitter</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">LinkedIn</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Github</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Facebook</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-yellow-900 tracking-widest text-sm mb-3">COMPANY</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">About us</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Contact</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">News</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Careers</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-yellow-900 tracking-widest text-sm mb-3">RESOURCES</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Blog</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Events</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Support</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Help center</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-yellow-900 tracking-widest text-sm mb-3">LEGAL</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Privacy</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Licenses</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Cookies</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Terms</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class>
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 K-Net —
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@MrsRobbot</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
  </div>
  </div>

    </div>
  )
}