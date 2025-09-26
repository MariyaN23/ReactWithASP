export const HomePage = () => {
    return (
        <div className={'space-y-6'}>
            <h1 className={'font-bold text-3xl'}>Welcome to Book store!</h1>
            <p>
                See all books <a href={'/books'}
                className={'text-blue-500 hover:opacity-40 transition-opacity'}
            >
                    here
                </a>
            </p>
        </div>
    )
}