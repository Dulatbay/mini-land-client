interface props{
    type: string
}
export const YourThings = ({type}:props) => {

    return (
        <div className={`text-[24px] md:text-[30px]`}>
            Ваши {type}
        </div>
    );
};
