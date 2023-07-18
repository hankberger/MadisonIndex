
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className="p-4 bg-white flex min-h-screen max-w-5xl w-full flex-col">
            {children}
        </main>
    )
  }