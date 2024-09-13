'use client';

import Category from './Category';
import BrooklynStore from './BrooklynStore';
import Schedule from './Schedule';
import Policies from './Policies';

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white min-h-[400px] py-4">
      <div className="w-full flex justify-start flex-wrap max-w-[1201px] m-auto pt-3 px-3">
      <BrooklynStore />
        <Policies />        
        <Category />
        <Schedule />
      </div>
      
    </footer>
  );
};

export default Footer;
