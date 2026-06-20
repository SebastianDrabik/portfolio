import { createContext, useContext, useRef, type ReactNode } from 'react'

const SectionContext = createContext<{ next: () => number } | null>(null)

export function SectionProvider({ children }: { children: ReactNode }) {
    const counterRef = useRef(0)
    counterRef.current = 0

    return (
        <SectionContext.Provider value={{ next: () => ++counterRef.current }}>
            {children}
        </SectionContext.Provider>
    )
}

export function useSectionNumber() {
    const ctx = useContext(SectionContext)
    if (!ctx) throw new Error('useSectionNumber must be inside <SectionProvider>')

    const numberRef = useRef<number | null>(null)
    if (numberRef.current === null) {
        numberRef.current = ctx.next()
    }

    return numberRef.current
}