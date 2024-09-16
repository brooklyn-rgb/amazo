import Link from "next/link";

const Schedule = () => {
  return (
    <div className="flex-grow lg:pt-4 mt-7 lg:mt-0 w-2/4 sm:w-[30%] lg:w-1/4 text-white">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl">
          Schedule
        </p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base w-auto">
          <li className="mb-2">
            Monday - Friday
            <span className="pl-3 text-yellow-400 font-medium">9AM - 5PM</span>
          </li>
          <li className="mb-2">
            Saturday
            <span className="pl-3 text-yellow-400 font-medium">9AM - 12PM</span>
          </li>
          <li className="mb-2">
            Sunday
            <span className="pl-3 text-yellow-400 font-medium">Closed</span>
          </li>
          <li className="mb-2 py-4 font-extrabold">
            Tel: <span className='text-blue font-extrabold'>+27 78 151 5716</span>
            <span className="pl-3 text-yellow-400 font-medium">Call Green</span>
          </li>
          <li className="mb-2 py-4 font-extrabold">
            <Link href='https://maps.app.goo.gl/pj2Ckc8EckLuMDWW6'>Location:
            <span className="pl-3 text-yellow-400 font-medium">Brooklyn Store: 2 Stanley Ave, Braamfontein Werf, Johannesburg, 2092</span>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
