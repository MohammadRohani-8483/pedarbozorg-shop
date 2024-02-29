const Star = ({ present }: any) => {
    return (
        <div className="relative w-5 h-5 bg-[url('/iconSax/like-yellow-regular.svg')] bg-cover bg-no-repeat">
            <div
                style={{ width: `${present}%` }}
                className="absolute h-full bg-[url('/iconSax/like-yellow.svg')] bg-cover bg-no-repeat bg-right"
            />
        </div>
    )
}

export default Star
