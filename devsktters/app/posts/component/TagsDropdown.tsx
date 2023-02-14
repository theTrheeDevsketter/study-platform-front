import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { Tags, TagsArray } from '../../../src/interfaces/Tags'



export default function Example({selectedTags, setSelectedTags} : any) {

    const [tags, setTags] = useState<Tags[]>([]);


    useEffect(() => {

        getTags();

    }, []);

    async function getTags() {

        const res = await axios.get('http://localhost:8080/tags/')

        // const tagsNames = res.data.map((item: Tags) => ({ name: item.name}))

        // console.log(tagsNames);
        

        setTags([...tags, ...res.data]);
    }

    return (
        <div>

        <div className="fixed top-16 w-72">
        <Listbox value={selectedTags} onChange={setSelectedTags} multiple>
            <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedTags.map((tag: Tags) => tag.name).join(', ')}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {tags.map((tag, tagId) => (
                            <Listbox.Option
                                key={tagId}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                    }`
                                }
                                value={tag}
                            >
                                {tag.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    </div>  

        </div>

        

            

    )
}
