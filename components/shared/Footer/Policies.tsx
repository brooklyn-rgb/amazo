import Link from 'next/link';

const Policies = () => {
  return (
    <div className="flex-grow lg:pt-4 mt-7 sm:mt-0 w-2/4 sm:w-[30%] md:w-1/4 text-white">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl">
          Policy
        </p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base w-auto">
          <Link
            href={{
              pathname: '/policies/privacy',
              query: {
                category: 'privacy-policy',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Privacy Policy
            </li>
          </Link>

          <Link
            href={{
              pathname: '/policies/terms',
              query: {
                category: 'terms',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Terms and Condition
            </li>
          </Link>

          <Link
            href={{
              pathname: '/policies/refund',
              query: {
                category: 'refund',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Refund Policy
            </li>
          </Link>   

          <Link
            href={{
              pathname: '/policies/return',
              query: {
                category: 'return',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Return Policy
            </li>
          </Link>

          <Link
            href={{
              pathname: '/policies/shipping',
              query: {
                category: 'shipping',
              },
            }}
          >
            <li className="mb-2 cursor-pointer hover:underline duration-200">
              Shipping Policy
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
