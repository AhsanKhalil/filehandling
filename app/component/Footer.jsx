export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} File Handling. All rights reserved.</p>
      </div>
    </footer>
  );
}
