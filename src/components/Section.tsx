import {cn} from "#/lib/utils.ts";

export function Section({ title, tag, children, bgMode = "default" }: {title: string, tag: string, children?: React.ReactNode, bgMode?: 'default' | 'secondary'}) {
    // TODO: secondary color

    return (
        <section className={cn("w-full py-8", bgMode == 'secondary' ? 'bg-' : '')}>
            <div className="max-w-7xl mx-auto px-2">
                <h2 className="text-xl flex items-center">
                    <span className="p-1 bg-primary/10 border-primary border-2 text-primary uppercase text-sm mr-2">{tag}</span>
                    <span className="text-white mr-3 max-w-max font-bold text-2xl">{title}</span>
                    <div className="bg-gray-600 flex-1 h-px mb-1"></div>
                </h2>
                <div className="text-muted-foreground mt-4">
                    {children}
                </div>
            </div>
        </section>
    );
}