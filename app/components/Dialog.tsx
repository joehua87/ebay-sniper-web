import { Dialog as BaseDialog, Transition } from '@headlessui/react'
import type { ReactNode } from 'react'
import { Fragment } from 'react'

export interface DialogProps {
  isShow: boolean
  onClose: () => void
  title: ReactNode
  children: ReactNode
}

export function Dialog({ isShow, onClose, title, children }: DialogProps) {
  return (
    <Transition appear show={isShow} as={Fragment}>
      <BaseDialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <BaseDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <BaseDialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </BaseDialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </BaseDialog>
    </Transition>
  )
}
