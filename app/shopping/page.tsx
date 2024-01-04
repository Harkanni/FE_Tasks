'use client'

import React, { useEffect } from 'react'
import styles from '@/app/styles.module.css'

import { Fragment, useState } from 'react'
import { Combobox, Transition, Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { MdClose } from 'react-icons/md'
import { IoSend } from "react-icons/io5";
import { FaRedo } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

// interface PersonProps {
//    id: number,
//    name: string,
//    removed: boolean
// }

// const peopleData = [
//    { id: 1, name: 'Wade Cooper', },
//    { id: 2, name: 'Arlene Mccoy', },
// ]

const peopleData: any = ['Garri',]
const peopleQuery: any = []


const ShoppingList = () => {
   const [people, setPeople]: any = useState(peopleData)
   const [autocompleteList, setAutocompleteList]: any = useState(peopleQuery)
   // const [selected, setSelected] = useState('')
   const [selectedPerson, setSelectedPerson] = useState('')
   const [query, setQuery] = useState('')
   const [clickedItems, setClickedItems] = useState<any>({})
   const [isFetching, setIsFetching] = useState<boolean>(false)
   const [count, setCount] = useState(1)

   useEffect(() => {
      console.log('called', query)
      const fetchData = async () => {
         try {
            setIsFetching(true);

            const abortController = new AbortController();
            const signal = abortController.signal;

            const response = await fetch(`https://api.frontendeval.com/fake/food/${query}`, { signal });
            const data = await response.json();

            if (!signal.aborted) {
               setAutocompleteList([...data]);
            }
            console.log(data);
         } catch (error) {
            console.error('Error fetching data:', error);
         } finally {
            setIsFetching(false);
         }
      };

      const debouncedFetchData = () => {
         clearTimeout(timeoutId);
         if (query.length >= 2) {
            timeoutId = setTimeout(fetchData, 500); // Adjust the debounce delay as needed
         }
      };

      debouncedFetchData();

      return () => clearTimeout(timeoutId);
   }, [query]);


   const filteredPeople =
      query === ''
         ? autocompleteList
         : autocompleteList.filter((person: string) =>
            person
               .toLowerCase()
               .replace(/\s+/g, '')
               .includes(query.toLowerCase().replace(/\s+/g, ''))
         )

   let timeoutId: any;

   const handleStrikeClick = (itemId: any) => {
      // Toggle the clicked state for the item
      setClickedItems((prevClickedItems: any) => ({
         ...prevClickedItems,
         [itemId]: !prevClickedItems[itemId],
      }));
   }

   const handleAddToList = (item: any) => {
      console.log(item)
      setPeople([...people, item])
      setQuery('')
   }

   const handleChange = (event: any) => {
      setQuery(event.target.value)
   }

   const handleRemoveItem = (item: any) => {
      const updatedPeople = people.filter((name: string) => name !== item);
      setPeople(updatedPeople);
   }

   return (
      <section className={styles.shoppingListContainer} >

         <div className="mt-1 w-80">
            <Combobox value={selectedPerson} onChange={setSelectedPerson}>
               <div className="relative mt-1">
                  <div className="flex flex-row relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                     <Combobox.Input
                        className="flex-1 placeholder:font-light w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 bg-slate-200"
                        displayValue={(person: string) => person}
                        onChange={(event) => handleChange(event)}
                        placeholder='Add to shopping list'
                     />
                     <div className='flex flex-[.25] cursor-pointer hover:opacity-90 bg-black overflow-hidden justify-center items-center' onClick={() => handleAddToList(selectedPerson)}>
                        <IoSend color='white' size='25' />
                     </div>
                  </div>
                  <Transition
                     as={Fragment}
                     leave="transition ease-in duration-100"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                     afterLeave={() => setQuery('')}
                  >
                     {isFetching
                        ? <div> ...isLoading </div>
                        : <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                           {filteredPeople.length === 0 && query !== '' ? (
                              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                 Nothing found.
                              </div>
                           ) : (
                              filteredPeople.map((person: string, index: number) => (
                                 <Combobox.Option
                                    key={index}
                                    className={({ active }) =>
                                       `capitalize relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                       }`
                                    }
                                    value={person}
                                    onClick={() => { setQuery(selectedPerson); console.log(selectedPerson) }} // ADDED
                                 >
                                    {({ selected, active }) => (
                                       <>
                                          <span
                                             className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                          >
                                             {person}
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
                     }
                  </Transition>
               </div>
            </Combobox>
         </div>

         <div className="mt-5 min-w-96  border-cyan-700 flex flex-col gap-2 border-spacing-90 overflow-hidden rounded-lg min-h-2">
            <h3>Shopping List</h3>
            {people.map((person: string, index: number) => (
               <div key={index} className='bg-slate-200  flex flex-column justify-between gap-2'>
                  <div className={`p-[.7rem] flex-1 flex items-center gap-3 text-gray-900 text-sm ${clickedItems[index] && styles.strikeThroughBG}`}>
                     <div className={`flex flex-[.2] cursor-pointer hover:opacity-90 overflow-hidden justify-center items-center`} onClick={() => handleStrikeClick(index)} >
                        <IoCheckmarkDoneSharp size={24} />
                     </div>
                     <p className={`capitalize text-base ${clickedItems[index] && styles.strikeThrough}`}>{person}</p>
                  </div>
                  <div className={`flex flex-[.2] cursor-pointer hover:opacity-90 bg-black ${clickedItems[index] && 'bg-[#424040fd]'} overflow-hidden justify-center items-center`} onClick={() => handleRemoveItem(person)} >
                     { !clickedItems[index] ? <MdClose color='white' /> : null }
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default ShoppingList