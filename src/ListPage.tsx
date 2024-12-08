import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import ListCard from './ListCard';

import { movieContext } from './context/movieContext';

const defaultFields = {
  movieName: '',
  description: '',
};

const ListPage = () => {
  const { movieList, addMovie } = useContext(movieContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formFields, setFormFields] = useState(defaultFields);
  const { movieName, description } = formFields;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState(movieList);

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMovie({ name: movieName, description });
    setFormFields(defaultFields);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const newFilteredList = movieList.filter((value) =>
      value.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(newFilteredList);
  }, [searchTerm, movieList]);

  return (
    <div className="m-10">
      <div className="w-3/4 mx-auto">
        <h1 className="text-center uppercase font-bold text-2xl">
          My movie list
        </h1>
        <div className="w-full flex items-center gap-4 justify-center mt-5 mb-3">
          <FaPlus
            size={30}
            className="cursor-pointer outline rounded-md p-1 hover:bg-green-100"
            onClick={() => setIsModalOpen(true)}
          />
          <input
            type="text"
            className="border border-gray-400 rounded-xl px-4 py-1 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredList.length === 0 ? (
          <h1 className="text-center mt-10 font-semibold text-lg">
            Nothing to see here ✨. Maybe add a movie
          </h1>
        ) : (
          filteredList.map((value, index) => {
            return (
              <ListCard
                movieName={value.name}
                description={value.description}
                index={index}
                key={index}
              />
            );
          })
        )}
      </div>

      {/* Modal */}
      <div
        className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border flex justify-center items-center"
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <div className="bg-white w-2/5 h-2/5 rounded-md p-10">
          <form action="#" onSubmit={submitHandler}>
            <div className="flex flex-col">
              <label
                htmlFor="movieName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Movie Name
              </label>
              <input
                name="movieName"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={movieName}
                onChange={changeHandler}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                name="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                rows={4}
                value={description}
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center mt-5 gap-10">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
