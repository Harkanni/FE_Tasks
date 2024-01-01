'use client'

import React from 'react'
import styles from '@/app/styles.module.css'

import { Fragment, useState } from 'react'
import { Combobox, Transition, Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { MdClose } from 'react-icons/md'
import { IoIosSend } from "react-icons/io";

interface PersonProps {
   id: number,
   name: string,
}

const people = [
   { id: 1, name: 'Wade Cooper' },
   { id: 2, name: 'Arlene Mccoy' },
   { id: 3, name: 'Devon Webb' },
   { id: 4, name: 'Tom Cook' },
   { id: 5, name: 'Tanya Fox' },
   { id: 6, name: 'Hellen Schmidt' },
]


const ShoppingList = () => {
   const [selected, setSelected] = useState('')
   const [selectedPerson, setSelectedPerson] = useState(people[0])
   const [query, setQuery] = useState('')

   const filteredPeople =
      query === ''
         ? people
         : people.filter((person) =>
            person.name
               .toLowerCase()
               .replace(/\s+/g, '')
               .includes(query.toLowerCase().replace(/\s+/g, ''))
         )

   return (
      <section className={styles.shoppingListContainer}>
         <div>
            Shopping cart
         </div>
         <div className="mt-1 w-80">
            <Combobox value={selected} onChange={setSelected}>
               <div className="relative mt-1">
                  <div className="flex flex-row relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                     <Combobox.Input
                        className="flex-1 w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 bg-slate-200"
                        displayValue={(person: PersonProps) => person.name}
                        onChange={(event) => setQuery(event.target.value)}
                     />
                     <div className='flex flex-[.25] cursor-pointer hover:opacity-90 bg-black overflow-hidden justify-center items-center'>
                     <IoIosSend color='white'/>
                     </div>
                  </div>
                  <Transition
                     as={Fragment}
                     leave="transition ease-in duration-100"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                     afterLeave={() => setQuery('')}
                  >
                     <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {filteredPeople.length === 0 && query !== '' ? (
                           <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                              Nothing found.
                           </div>
                        ) : (
                           filteredPeople.map((person) => (
                              <Combobox.Option
                                 key={person.id}
                                 className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                    }`
                                 }
                                 value={person}
                              >
                                 {({ selected, active }) => (
                                    <>
                                       <span
                                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                             }`}
                                       >
                                          {person.name}
                                       </span>
                                       {selected ? (
                                          <span
                                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                }`}
                                          >
                                             <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                          </span>
                                       ) : null}
                                    </>
                                 )}
                              </Combobox.Option>
                           ))
                        )}
                     </Combobox.Options>
                  </Transition>
               </div>
            </Combobox>
         </div>
         <div className="mt-2 w-80  border-cyan-700 flex flex-col gap-2 border-spacing-90 overflow-hidden rounded-lg min-h-2">
            {people.map((person: PersonProps) => (
               <div className='bg-slate-200  flex flex-column justify-between'>
                  <div className='p-[.7rem] flex-1 text-gray-900 text-sm'>{person.name}</div>
                  <div className='flex flex-[.2] cursor-pointer hover:opacity-90 bg-black overflow-hidden justify-center items-center'>
                     <MdClose color='white' />
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default ShoppingList