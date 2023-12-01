import { useLoaderData } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import { Button } from '@mui/material';
import bag from '../../assets/backpack.png';
import cap from '../../assets/cap.png';
import shoes from '../../assets/shoes.png';

const Home = () => {
  const allData = useLoaderData();

  return (
    <div className='my-container grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-8 mb-4 md:mb-6 lg:mb-32'>
      <div className='flex flex-col justify-center w-full lg:w-11/12 '>
        <h3 className='text-xl md:text-3xl lg:text-6xl headLine-font'>
          Find your{' '}
          <span className='font-semibold  text-transparent bg-clip-text bg-gradient-to-br from-[#0076CE] to-[#9400D3] '>
            favourite
          </span>{' '} product.
          
        </h3>
        <p className='mt-2 md:mt-3 lg:mt-5 text-gray-500 font-mono '>
          Winter clothing are clothes used for protection against the
          particularly cold weather of winter.
        </p>
        <div className='my-4 md:mt-6 lg:mt-14'>
          <form>
            <input
              type='text'
              placeholder='Search by name'
              required
              name='searchName'
              className='relative rounded-lg px-4 md:px-8 py-2 lg:py-7 text-xl text-[#AEB0B4] border-2 border-[#BFBFBF] w-8/12 md:w-8/12 lg:w-8/12'
            />
            <button
              type='submit'
              className='absolute   bg-[#0076CE] text-xl border-2 border-[#0076CE] text-white rounded-lg -ml-8 px-4 md:px-12 lg:px-16 py-2 lg:py-7 text-center'
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className='flex md:gap-2 lg:gap-4 md:justify-center w-full lg:w-11/12 '>
        <div className='lg:mt-[20%]'>
          <img src={bag} alt='backpack-photo' className='h-full w-full' />
        </div>
        <div className='lg:mb-[20%]'>
          <img src={cap} alt='cap-photo' className='h-full w-full' />
        </div>
        <div className='lg:mt-[10%] lg:mb-[10%]'>
          <img src={shoes} alt='shoes-photo' className='h-full w-full' />
        </div>
      </div>
    </div>
  );
};

export default Home;
