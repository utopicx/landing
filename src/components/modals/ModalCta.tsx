import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Cross from "../svgs/Cross";

interface Props {
  show: boolean;
  closeModal: () => void;
}

interface Form {
  name: string;
  email: string;
  comments: string;
}

const ModalCta: React.FC<Props> = ({ show, closeModal }) => {
  const { register, handleSubmit } = useForm<Form>();

  const submit = () => {
    closeModal();
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-utopicx-gray-dark transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full px-12 py-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative border-2 border-utopicx-magenta bg-transparent rounded-bl-lg rounded-tr-lg px-6 pt-5 pb-6 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                <button
                  type="button"
                  className="absolute right-4 top-4 border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
                  onClick={closeModal}
                >
                  <Cross />
                </button>
                <div>
                  <div className="mt-3 sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-medium text-utopicx-cyan"
                    >
                      Dejanos un comentario
                    </Dialog.Title>
                    <div>
                      <p className="text-sm text-white">
                        Queremos saber que opinias de nuestra fantabulosidad
                      </p>
                    </div>
                  </div>
                </div>
                <form
                  className="mt-5 sm:mt-6 space-y-2"
                  onSubmit={handleSubmit(submit)}
                >
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Nombre o apodo
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      required
                      id="name"
                      className="border-2 text-white shadow-sm rounded-bl-xl rounded-tr-xl bg-transparent  focus:ring-utopicx-yellow focus:border-utopicx-yellow block w-full sm:text-sm border-utopicx-magenta"
                      placeholder="Apodo o nombre "
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      required
                      id="email"
                      className="border-2 text-white shadow-sm rounded-bl-xl rounded-tr-xl bg-transparent focus:ring-utopicx-yellow focus:border-utopicx-yellow block w-full sm:text-sm border-utopicx-magenta"
                      placeholder="Mail"
                    />
                  </div>
                  <div>
                    <label htmlFor="comment" className="sr-only">
                      Add your comments
                    </label>
                    <div>
                      <textarea
                        rows={4}
                        {...register("comments", { required: true })}
                        required
                        id="comment"
                        className="border-2 text-white shadow-sm rounded-bl-xl rounded-tr-xl bg-transparent focus:ring-utopicx-yellow focus:border-utopicx-yellow block w-full sm:text-sm border-utopicx-magenta"
                        defaultValue={""}
                        placeholder="Comentarios"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-utopicx-cyan text-xl py-1 w-full font-medium rounded-bl-xl rounded-tr-xl border-2 border-utopicx-cyan px-6"
                  >
                    Enviar
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalCta;
