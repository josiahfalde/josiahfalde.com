export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8">
        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} Josiah Falde
        </p>
        <p className="font-serif text-sm italic text-ink-faint">
          Step into suffering, and be useful in it.
        </p>
      </div>
    </footer>
  );
}
