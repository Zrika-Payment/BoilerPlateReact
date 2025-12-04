function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

//FORM //
export function Form({ classname, children, ...props }) {
    return (
        <div className={cn('max-w-3xl mx-auto', classname)} {...props}>{children}</div>
    )

}

export function FormHeader({ classname, children, ...props }) {
    return (
        <>
            <h1 className={cn('text-center mb-8', classname)}{...props}>
                {children}
            </h1>

        </>
    )
}

export function FormDescription({ classname, children, ...props }) {
    return (<p className={cn('text-center mb-8', classname)}{...props}>{children}</p>)

}

export function FormContainer({ classname, children, ...props }) {
    return (
        <div className={cn('bg-white rounded-xl shadow-2xl p-20 space-y-6 my-6', classname)}{...props}>
            {children}
        </div>
    )
}

export function SubmitForm({ classname, children, ...props }) {
    return (

        <button
            className={cn("w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg", classname)}{...props}
        >
            {children}
        </button>

    )
}