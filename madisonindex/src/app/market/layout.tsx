
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className="bg-slate-200 flex min-h-screen max-w-5xl w-full flex-col">
            {children}
        </main>
    )
  }