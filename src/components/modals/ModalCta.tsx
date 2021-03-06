import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useGlobal } from "../../context/global/Context";
import MENU_DATA from "../../data/menu";
import Image from "next/image";
import btnSendImg from "../../../public/images/btn_enviar.png";
import bgFormBorderImg from "../../../public/images/form_marco.png";
import crossImg from "../../../public/images/cruz.png";
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
    let titleElement: null | Element = null;

    if (state.swiperMaster && show) {
      const actualSlide = MENU_DATA[state.swiperMaster.realIndex];
      actualSection = document.querySelector(`#${actualSlide.id}`);
      titleElement = document.querySelector("#title");

      if (actualSection && titleElement) {
        actualSection.classList.add(
          "transition-opacity",
          "duration-300",
          "opacity-0"
        );
        titleElement.classList.remove("wordGlitch");
        titleElement.classList.add(
          "transition-opacity",
          "duration-300",
          "opacity-0"
        );
      }
    }
    return () => {
      setTimeout(() => {
        actualSection && actualSection.classList.remove("opacity-0");
        if (titleElement) {
          titleElement.classList.remove(
            "opacity-0",
            "transition-opacity",
            "duration-300"
          );
          titleElement.classList.add("wordGlitch");
        }
      }, 200);
    };
  }, [show]);

  useEffect(() => {
    if (state.swiperMaster && show) {
      state.swiperMaster.on("slideChange", () => {
        closeModal();
      });
    }
  }, [show, state.swiperMaster]);

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
          <div className="fixed inset-0 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="modal-cta fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center px-10 py-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-bl-lg rounded-tr-lg bg-transparent px-8 pt-5 pb-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 lg:mt-24 lg:px-12">
                <button
                  type="button"
                  className="absolute right-8 top-8 z-20 h-6 w-6 border border-transparent focus:outline-none focus:ring-1 focus:ring-utopicx-magenta focus:ring-offset-1 focus:ring-offset-transparent"
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
                        className="text-3xl font-medium text-utopicx-cyan lg:text-5xl"
                      >
                        Dejanos un comentario
                      </Dialog.Title>
                      <div>
                        <p className="text-sm text-white lg:text-xl">
                          Queremos saber que opinias de nuestra fantabulosidad
                        </p>
                      </div>
                    </div>
                  </div>
                  <form
                    className="mt-5 space-y-2 sm:mt-6"
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
                          className="relative z-10 block w-full rounded-br-md rounded-tl-md rounded-bl-xl rounded-tr-xl border-transparent bg-transparent text-white shadow-sm placeholder:text-gray-100 focus:border-transparent focus:ring-2 focus:ring-utopicx-magenta sm:text-sm lg:text-xl"
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
                          className="relative z-10 block w-full rounded-bl-xl rounded-tr-xl rounded-br-md rounded-tl-md border-transparent bg-transparent text-white shadow-sm placeholder:text-gray-100 focus:border-transparent focus:ring-2 focus:ring-utopicx-magenta sm:text-sm lg:text-xl"
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
                          className="relative z-10 block w-full rounded-bl-xl rounded-tr-xl rounded-br-md rounded-tl-md border-transparent bg-transparent text-white shadow-sm placeholder:text-gray-100 focus:border-transparent focus:ring-2 focus:ring-utopicx-magenta sm:text-sm lg:text-xl"
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
                      className="block w-full rounded-bl-xl rounded-tr-xl py-1 text-xl font-medium text-utopicx-cyan focus:ring-1 focus:ring-utopicx-cyan focus:ring-offset-1 focus:ring-offset-transparent"
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
