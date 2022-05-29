import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LogoHorizontalDark from "../svgs/LogoHorizontalDark";

interface Props {
  show: boolean;
  closeModal: () => void;
}

const MENU_DATA = [
  {
    name: "Inicio",
    href: "home",
  },
  {
    name: "Proyecto",
    href: "hi",
  },
  {
    name: "Nosotrxs",
    href: "aboutUs",
  },
  {
    name: "Apps",
    href: "apps",
  },
  {
    name: "Contacto",
    href: "cta",
  },
];

const ModalMenu: React.FC<Props> = ({ show, closeModal }) => {
  const goTo = (idElement: string) => {
    closeModal();
    document.getElementById(idElement)?.scrollIntoView();
  };

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
          <div className="fixed inset-0 bg-utopicx-gray-dark transition-opacity" />
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
                  className="absolute right-1 top-2 border border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
                  onClick={closeModal}
                >
                  <p className="sr-only">Cerrar menu</p>
                  <img src="/cross.png" alt="Cruz" />
                </button>
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <LogoHorizontalDark className="mt-20 h-28 mx-auto mb-6" />
                <nav>
                  <ul className="w-64 mx-auto space-y-8">
                    {MENU_DATA.map((section) => (
                      <li key={`section-${section.name}`}>
                        <button
                          className="text-utopicx-magenta font-bold text-3xl py-1 w-full rounded-bl-lg rounded-tr-lg border-2 border-utopicx-magenta px-6 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-utopicx-magenta focus:ring-offset-transparent"
                          type="button"
                          onClick={() => goTo(section.href)}
                        >
                          {section.name}
                        </button>
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
