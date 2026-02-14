import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold bg-gcx-gradient-gold bg-clip-text text-transparent mb-4">
        GCX One Solutions
      </h1>
      <p className="text-gcx-muted mb-8 text-center max-w-md">
        Advanced Enterprise Security & Surveillance Platform
      </p>
      <Link
        href="/solutions"
        className="px-6 py-3 gcx-btn-gradient text-white font-semibold rounded-lg hover:opacity-95 transition-opacity"
      >
        View Solutions Page
      </Link>
    </main>
  );
}
