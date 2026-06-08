export function Section({ title, tag, children }: {title: string, tag: string, children?: React.ReactNode}) {
    return (
        <section className="mx-auto max-w-7xl my-8">
            <h2 className="text-xl flex items-center">
                <span className="p-2 bg-primary/10 border-primary border-2 text-primary uppercase mr-2">{tag}</span>
                <span className="text-white mr-3 max-w-max font-bold">{title}</span>
                <div className="bg-gray-600 flex-1 h-0.5 mb-1"></div>
            </h2>
            <div className="text-muted-foreground mt-4">
                {children}
            </div>
        </section>
    );
}