import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LogoHorizontalDark from "../svgs/LogoHorizontalDark";
import { useGlobal } from "../../context/global/Context";
import MENU_DATA from "../../data/menu";
import Image from "next/image";
import crossImg from "../../../public/images/cross.png";
import menuConection1Img from "../../../public/images/menu_conexion.png";
import menuConection2Img from "../../../public/images/menu_conexion2.png";

interface Props {
  show: boolean;
  closeModal: () => void;
}

const ModalMenu: React.FC<Props> = ({ show, closeModal }) => {
  const { state } = useGlobal();

  const goTo = (indexSlide: number) => {
    const containerModals = document.querySelector("#headlessui-portal-root");

    if (
      containerModals &&
      containerModals.childElementCount >= 2 &&
      containerModals.firstElementChild &&
      state.swiperMaster
    ) {
      const actualSlide = MENU_DATA[state.swiperMaster.realIndex];
      const actualSection = document.querySelector(`#${actualSlide.id}`);
      actualSection?.classList.remove("opacity-0");
      containerModals.removeChild(containerModals.firstElementChild);
    }
    closeModal();
    state.swiperMaster?.slideTo(indexSlide);
  };

  useEffect(() => {
    let actualSection: null | HTMLDivElement = null;
    let headerElement: null | Element = null;
    let modalCtaElement: null | Element = null;
    if (state.swiperMaster && show) {
      const actualSlide = MENU_DATA[state.swiperMaster.realIndex];
      actualSection = document.querySelector(`#${actualSlide.id}`);
      headerElement = document.querySelector("header");
      modalCtaElement = document.querySelector(".modal-cta");

      if (actualSection && headerElement) {
        actualSection.classList.add(
          "transition-opacity",
          "duration-300",
          "opacity-0"
        );
        headerElement.classList.add(
          "transition-opacity",
          "duration-300",
          "opacity-0"
        );
      }
      if (modalCtaElement) {
        modalCtaElement.classList.add(
          "transition-opacity",
          "duration-300",
          "opacity-0"
        );
      }
    }
    return () => {
      setTimeout(() => {
        console.log({ a: actualSection && !modalCtaElement });
        actualSection &&
          !modalCtaElement &&
          actualSection.classList.remove("opacity-0");
        headerElement && headerElement.classList.remove("opacity-0");
      }, 200);
      modalCtaElement && modalCtaElement.classList.remove("opacity-0");
    };
  }, [show]);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative text-left overflow-hidden transform transition-all pb-4">
                <button
                  type="button"
                  className="absolute right-1 w-8 h-8 top-2 border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
                  onClick={closeModal}
                >
                  <p className="sr-only">Cerrar menu</p>
                  <Image src={crossImg} alt="Cruz" />
                </button>
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <LogoHorizontalDark className="mt-20 h-28 mx-auto mb-6" />
                <nav>
                  <ul className="w-64 mx-auto space-y-4">
                    {MENU_DATA.map((section, i) => (
                      <li className="relative" key={`section-${section.id}`}>
                        <button
                          className="text-utopicx-magenta font-bold text-3xl w-full rounded-bl-lg rounded-tr-lg px-6 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
                          type="button"
                          onClick={() => goTo(i)}
                        >
                          <span className="sr-only">{section.name}</span>
                          <Image
                            layout="responsive"
                            src={section.imgSrc}
                            alt={section.name}
                          />
                        </button>
                        {i + 1 !== MENU_DATA.length ? (
                          <>
                            {i % 2 ? (
                              <div className="absolute -bottom-6 w-10 right-14">
                                <Image src={menuConection2Img} alt="Conexion" />
                              </div>
                            ) : (
                              <div className="absolute -bottom-6 w-10 left-14">
                                <Image src={menuConection1Img} alt="Conexion" />
                              </div>
                            )}
                          </>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalMenu;
