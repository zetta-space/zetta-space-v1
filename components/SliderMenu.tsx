import { categories } from '@/lib/temp/categories.temp';
import React from 'react'
import CategoryBadge from './CategoryBadge';

function SliderMenu() {
  return (
    <>
        <div className="py-4 w-full border-y-[1px] mt-16 mb-8 ">
          <div className="flex flex-row justify-center items-center space-x-4 mx-8">
            {categories.map((value, key) => {
              return <CategoryBadge prop={value} key={key} />;
            })}
          </div>
        </div>
    </>
  )
}

export default SliderMenu