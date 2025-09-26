export const NotFound = () => {
    return (
        <div className={'flex flex-col gap-4'}>
            <h2 className={'font-bold text-3xl'}>
                Page not found
            </h2>
            <a
                className={'hover:text-blue-500 transition-colors'}
                href={'/'}
            >
                Back to Home page
            </a>
        </div>
    )
}