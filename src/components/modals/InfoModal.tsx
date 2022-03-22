import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Ingene bakina" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tomboza ijambo gushika incuro 6. Inyuma y'ijambo ugerageje, amabara
        araza guhinduka kugirango werekane uburyo ivyo uriko uratomboza biri
        hafi y'ijambo.
      </p>

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
        Urudome U ruri mw'ijambo kandi ruri mu kibanza carwo.
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
        Urudome A ruri mw'ijambo ariko ntiruri mu kibanza carwo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="M" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="Z" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Urudome Z ntarurimwo mw'ijambo.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Hari ikibazo mwahuye uriko urakina. Bimenyeshe mu gasandugu k'amakete
        kuri Twitter -{' '}
        <a
          href="https://twitter.com/lionelkubwimana"
          className="underline font-bold"
        >
          Fyonda hano !
        </a>{' '}
        <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
          Code yanfashije gukora uno mukino -{' '}
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
