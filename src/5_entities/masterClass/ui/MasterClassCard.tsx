import {ButtonDelete} from "@/6_shared/BaseComponents/ButtonDelete/ButtonDelete.tsx";

export const MasterClassCard = () => {
    return <a href="#"
              className="flex flex-col border-2 items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img className="object-cover w-full rounded-t-lg h-64 md:w-48 md:rounded-none md:rounded-s-lg"
             src="https://scontent.fala8-1.fna.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=VPwi6gRLmCoAX9QVOde&_nc_ht=scontent.fala8-1.fna&oh=00_AfDstEoqECCDAQy5YHCjlxIxuXjDxXnfk8bPV7PjNch2FQ&oe=65EECA8E"
             alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology
                acquisitions 2021</h5>
            <p className="font-normal text-gray-700">Here are the biggest enterprise
                technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className={"flex mb-3 gap-8 w-full justify-between items-center"}>
                <p className={'text-xl'}>Цена: <strong>900</strong></p>
                <div className={"self-end"}>
                    <ButtonDelete showIcon={true} clickHandler={() => {
                    }}/>
                </div>
            </div>
        </div>
    </a>


}