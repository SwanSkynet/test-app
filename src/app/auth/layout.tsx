export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="mb-8 text-2xl font-bold text-gray-700">Authentication</nav>

        {children}
      
    </section>
  );
}