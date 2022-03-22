import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Urukino rugenda uku :"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tora ijambo ryinyegeje. Ushobora kugerageza incuro 6. Uko ukina, amabara
        y'indome araza guhinduka. Ayo mabara aza kukwereka ko uriko uregereza
        gutora ijambo ryinyegeje.
      </p>
      <p>Akarorero: </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="correct"
        />
        <Cell value="M" />
        <Cell value="U" />
        <Cell value="T" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Urudome "U" ruri mw'ijambo ryinyegeje kandi ruri mu kibanza carwo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="M" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="T" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Urudome "A" ruri mw'ijambo ryinyegeje ariko ntiruri mu kibanza carwo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="M" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="Z" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Urudome "Z" ntirurimwo mw'ijambo ryinyegeje.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Hari ikibazo wagize mu gukina ? Bimenyeshe mu gasandugu k'amakete kuri
        'Twitter' -{' '}
        <a
          href="https://twitter.com/lionelkubwimana"
          className="underline font-bold"
        >
          Fyonda hano !
        </a>{' '}
        <p className="mt-6 italic text-xs text-gray-500 dark:text-gray-300">
          Code yamfashije gukora runo rukino -{' '}
          <a
            href="https://github.com/cwackerfuss/react-wordle"
            className="underline font-bold"
          >
            Yirabe ngaha
          </a>{' '}
        </p>
      </p>
    </BaseModal>
  )
}
