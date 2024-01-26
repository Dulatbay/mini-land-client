
interface Props {
    selected: string,
    setSelected: (arg: string) => void
}

const types = [
    "Доход", "Расход"
]

export const RateTypeSelector = ({setSelected, selected}: Props) => {

    return <>
        <div className={'flex w-full justify-between'}>
            {
                types.map((type, index) => {
                    return <div onClick={() => setSelected(type)} key={index}
                                className={`${selected == type ? 'bg-blue-800' : 'bg-gray-800'} flex-1 text-center p-2
                                    border-gray-700 hover:brightness-125
                                   ${index % 2 ? "rounded-br-lg rounded-tr-lg border-l" : "rounded-bl-lg rounded-tl-lg border-r"}
                                `}>{type}</div>
                })
            }
        </div>
    </>
}