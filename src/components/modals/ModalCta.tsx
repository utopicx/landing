import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useGlobal } from "../../context/global/Context";
import MENU_DATA from "../../data/menu";
import Image from "next/image";
import btnSendImg from "../../../public/images/btn_enviar.png";
import bgFormBorderImg from "../../../public/images/form_marco.png";
import crossImg from "../../../public/images/cross.png";
import bgFormLabelImg from "../../../public/images/form_label.png";
import bgFormCommentImg from "../../../public/images/form_comentarios.png";

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
  const { state } = useGlobal();
  const { register, handleSubmit } = useForm<Form>();

  const submit = () => {
    closeModal();
  };

  useEffect(() => {
    let actualSection: null | HTMLDivElement = null;

    if (state.swiperMaster && show) {
      const actualSlide = MENU_DATA[state.swiperMaster.realIndex];
      actualSection = document.querySelector(`#${actualSlide.id}`);
      if (actualSection) {
        actualSection.classList.add(
          "transition-opacity",
          "duration-300",
          "opacity-0"
        );
      }
    }
    return () => {
      setTimeout(() => {
        actualSection && actualSection.classList.remove("opacity-0");
      }, 200);
    };
  }, [show]);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10 modal-cta" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full px-10 py-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-transparent rounded-bl-lg rounded-tr-lg px-8 pt-5 pb-6 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                <button
                  type="button"
                  className="absolute z-20 w-6 h-6 right-8 top-8 border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
                  onClick={closeModal}
                >
                  <span className="sr-only">Cerrar modal</span>
                  <Image layout="responsive" src={crossImg} alt="Cruz" />
                </button>
                <div className="relative z-10">
                  <div>
                    <div className="sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-medium text-utopicx-cyan md:text-5xl"
                      >
                        Dejanos un comentario
                      </Dialog.Title>
                      <div>
                        <p className="text-sm text-white md:text-xl">
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
                      <div className="relative">
                        <input
                          type="text"
                          {...register("name", { required: true })}
                          required
                          id="name"
                          className="relative z-10 border-transparent placeholder:text-gray-100 md:text-xl text-white shadow-sm rounded-br-md rounded-tl-md rounded-bl-xl rounded-tr-xl bg-transparent focus:ring-2 focus:border-transparent focus:ring-utopicx-magenta block w-full sm:text-sm"
                          placeholder="Apodo o nombre "
                        />
                        <div className="absolute inset-0">
                          <Image src={bgFormLabelImg} alt="Background input" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          {...register("email", { required: true })}
                          required
                          id="email"
                          className="relative z-10 placeholder:text-gray-100 md:text-xl text-white shadow-sm rounded-bl-xl rounded-tr-xl bg-transparent block w-full sm:text-sm rounded-br-md rounded-tl-md focus:ring-2 focus:border-transparent focus:ring-utopicx-magenta border-transparent"
                          placeholder="Mail"
                        />
                        <div className="absolute inset-0">
                          <Image src={bgFormLabelImg} alt="Background input" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="comment" className="sr-only">
                        Add your comments
                      </label>
                      <div className="relative">
                        <textarea
                          rows={4}
                          {...register("comments", { required: true })}
                          required
                          id="comment"
                          className="relative z-10 placeholder:text-gray-100 md:text-xl text-white shadow-sm rounded-bl-xl rounded-tr-xl bg-transparent block w-full sm:text-sm rounded-br-md rounded-tl-md focus:ring-2 focus:border-transparent focus:ring-utopicx-magenta border-transparent"
                          defaultValue={""}
                          placeholder="Comentarios"
                        />
                        <div className="absolute inset-0">
                          <Image
                            layout="fill"
                            src={bgFormCommentImg}
                            alt="Background input"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="block text-utopicx-cyan text-xl py-1 w-full font-medium rounded-bl-xl rounded-tr-xl focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-cyan focus:ring-offset-transparent"
                    >
                      <span className="sr-only">Enviar</span>
                      <Image
                        objectFit="contain"
                        layout="responsive"
                        src={btnSendImg}
                        alt="Enviar"
                      />
                    </button>
                  </form>
                </div>
                <div className="absolute -inset-0">
                  <Image layout="fill" src={bgFormBorderImg} alt="Marco Form" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalCta;
