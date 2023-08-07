import { useReCaptcha } from "next-recaptcha-v3";
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react";

const ContactView = () => {

  const [data, setData] = useState({email: '', text: ''})
  const [isOpen, setIsOpen] = useState(false)
  const [contactRes, setContactRes] = useState<any>({})

  const { executeRecaptcha } = useReCaptcha();

  return (
    <section
    id="contact"
    className="p__container border-t border-brand-secondary my-4 flex gap-6 flex-col "
    >
      <h3
      className="text-3xl font-bold"
      >Contact Me</h3>
      <form  
        onSubmit={async (e) => {
            e.preventDefault()
            if(!data.email || !data.text) return alert("Please fill all the fields")
            setIsOpen(true)
            const recaptchaToken = await executeRecaptcha("contact_submit")
            console.log("SENDIUNG")
            const responose = await fetch("/api/contact", {method: "POST", body: JSON.stringify({ ...data, recaptchaToken }  )})
            const res = await responose.text()
            console.log(res)
            setContactRes(res)
          }}
        className="flex flex-col gap-6 items-stretch"
        >
          <input type="email"
          onChange={(e) => setData({...data, email: e.target.value})}
          placeholder="Email"
          className="input bg-surface border border-brand-secondary rounded-lg w-full text-white"
          />
          <textarea
          onChange={(e) => setData({...data, text: e.target.value})}
          className="textarea border bg-surface border-brand-secondary rounded-lg w-full text-white" 
          placeholder="Type your message here..."
            cols={30} rows={10}
          >

          </textarea>
          <input type="submit" value="Send"
          className="input text-xl text-white bg-brand border border-brand-secondary rounded-xl w-full sm:max-w-[240px] cursor-pointer self-end " 
          />
        </form>
        <NotificationModal isOpen={isOpen} setIsOpen={setIsOpen} res={contactRes} />
    </section>
  )
}

interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  res: any
}

function NotificationModal({isOpen, setIsOpen, res} : ModalProps) {

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ContactView