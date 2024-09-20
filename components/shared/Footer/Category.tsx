import Link from 'next/link';

const Category = () => {
  return (
    <div className="flex-grow lg:pt-4 mt-7 sm:mt-0 w-2/4 sm:w-[30%] md:w-1/4 text-white">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl">
          Category
        </p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base w-auto">
          <Link
            href={{
              pathname: '/canon',
              query: {
                category: 'canon',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Canon
            </li>
          </Link>

          <Link
            href={{
              pathname: '/nikon',
              query: {
                category: 'nikon',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Nikon
            </li>
          </Link>

          <Link
            href={{
              pathname: '/sony',
              query: {
                category: 'sony',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Sony
            </li>
          </Link>

          <Link
            href={{
              pathname: '/godox',
              query: {
                category: 'godox',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Godox
            </li>
          </Link>

          <Link
            href={{
              pathname: '/fiji',
              query: {
                category: 'fiji',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Phillips
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Category;
