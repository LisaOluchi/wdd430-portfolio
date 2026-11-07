"use cache";

export default async function Footer() {
  return (
    <footer className="bg-[#F1B2DC] text-gray-900 py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {new Date().getFullYear()} | Lisa Sangqu | All rights reserved</p>
      </div>
    </footer>
  );
}
