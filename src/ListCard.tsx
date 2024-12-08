import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { movieContext } from './context/movieContext';

interface IListCard {
  movieName: string;
  description: string;
  index: number;
}

const ListCard = ({ movieName, description, index }: IListCard) => {
  const defaultFields = {
    name: movieName,
    desc: description,
  };
  const { updateMovie, deleteMovie } = useContext(movieContext);
  const [formFields, setFormFields] = useState(defaultFields);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { name, desc } = formFields;

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const submitEditHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateMovie(index, { name: name, description: desc });
    setFormFields(defaultFields);
    setIsModalOpen(false);
  };

  const submitDeleteHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteMovie(index);
    setFormFields(defaultFields);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="py-5 hover:bg-slate-100 px-3">
      <div className="flex justify-between items-center">
        <p className="text-base md:text-xl">{movieName}</p>
        <div className="flex gap-4">
          <MdEdit
            size={30}
            className="cursor-pointer outline rounded-md p-1 hover:bg-sky-200"
            onClick={() => setIsModalOpen(true)}
          />
          <IoTrashBin
            size={30}
            className="cursor-pointer outline rounded-md p-1 hover:bg-red-300"
            onClick={() => setIsDeleteModalOpen(true)}
          />
        </div>
      </div>
      <p className="text-sm md:text-base">{description}</p>

      {/* Edit Modal */}
      <div
        className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border flex justify-center items-center"
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <div className="bg-white w-2/5 h-2/5 rounded-md p-10">
          <form action="#" onSubmit={submitEditHandler}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Movie Name
              </label>
              <input
                name="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={changeHandler}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label
                htmlFor="desc"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                name="desc"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                rows={4}
                value={desc}
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center mt-5 gap-10">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
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

      {/* Delete Modal */}
      <div
        className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border flex justify-center items-center"
        style={{ display: isDeleteModalOpen ? 'flex' : 'none' }}
      >
        <div className="bg-white w-2/5 h-1/5 rounded-md p-10">
          <form action="#" onSubmit={submitDeleteHandler}>
            <p className="text-center">
              Are you sure you want to delete this entry?
            </p>
            <div className="flex justify-center mt-5 gap-10">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Yes
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                }}
              >
                No
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
