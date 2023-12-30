export default function ChatsLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex-1 w-full min-h-screen flex flex-col max-w-6xl mx-auto">
      {children}
    </div>
  );
}
