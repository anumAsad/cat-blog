import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 p-6 bg-teal-500 text-white text-center rounded-lg shadow-xl transition-transform transform hover:scale-105">
        Welcome to My Cat Blog!
      </h1>

      <div className="space-y-8">
        {/* Link to the "Cat Breeds" post */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-teal-50 hover:scale-105">
          <div className="flex items-center space-x-6">
            <Image
              src="/images/cats-breed.jpg"
              alt="Cat Breeds"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full object-cover border-4 border-teal-300 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div>
              <Link href="/blog/cat-breeds" className="text-2xl font-semibold text-teal-600 hover:text-teal-800 transition-all duration-300 ease-in-out">
                Cat Breeds
              </Link>
              <p className="mt-2 text-lg text-gray-700 transition-opacity duration-300 hover:opacity-70">
                Learn about different cat breeds including Persian, Siamese,Maine Coon and many more.
              </p>
            </div>
          </div>
        </div>

        {/* Link to the "Cats' Diet" post */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-teal-50 hover:scale-105">
          <div className="flex items-center space-x-6">
            <Image
              src="/images/feline-01.jpg"
              alt="Cats Diet"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full object-cover border-4 border-teal-300 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div>
              <Link href="/blog/cats-diet" className="text-2xl font-semibold text-teal-600 hover:text-teal-800 transition-all duration-300 ease-in-out">
                Cats Diet
              </Link>
              <p className="mt-2 text-lg text-gray-700 transition-opacity duration-300 hover:opacity-70">
                Understand what to feed your cat for a healthy diet.
              </p>
            </div>
          </div>
        </div>

        {/* Link to the "Cats' Health" post */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-teal-50 hover:scale-105">
          <div className="flex items-center space-x-6">
            <Image
              src="/images/cat-healths.jpg"
              alt="Cats' Health"
              width={200}
              height={200}
              className="w-32 h-32 rounded-full object-cover border-4 border-teal-300 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div>
              <Link href="/blog/cats-health" className="text-2xl font-semibold text-teal-600 hover:text-teal-800 transition-all duration-300 ease-in-out">
                Cats Health
              </Link>
              <p className="mt-2 text-lg text-gray-700 transition-opacity duration-300 hover:opacity-70">
                Learn how to keep your cat healthy and avoid common issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
