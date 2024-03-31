import Header from "@/Components/Header";
import Button from "@/Components/Button";

const EmployeeClaims = () => {

  return (
    <div>
      <div className='grid grid-cols-6'>
        <aside className='border-r-black border-2 px-[1rem] col-span-1 h-dvh'>
          <Header title="Filter By" style="text-xl" hrStyle="w-[10rem]"/>

          <form action="" className='flex flex-col items-center'>
            <fieldset className='grid grid-cols-2 gap-y-[2rem] mb-[2rem]'>
              <input type="checkbox" id="pending" value="pending"/>
              <label htmlFor="pending">Pending</label>
              <input type="checkbox" id="approved" value="approved"/>
              <label htmlFor="approved">Approved</label>
              <input type="checkbox" id="rejected" value="rejected"/>
              <label htmlFor="rejected">Rejected</label>
            </fieldset>

            <select name="type" id="type" value="" className='border-2 border-black mb-[2rem] w-[10rem] rounded-sm bg-[#D9D9D9]'>
              <option value="" disabled>Type</option>
              <option value="travel">Travel</option>
              <option value="meal">Meal</option>
              <option value="night_stay">Night Stay</option>
              <option value="gift">Gift</option>
            </select>

            <input name="date" type="date" className='mb-[2rem] border-2 border-black w-[10rem] rounded-sm bg-[#D9D9D9]'/>

            <Button type="submit" text="Apply Filters" style="w-[12.5rem]"/>

          </form>
        </aside>

        <div className='col-span-5 mr-[15rem] ml-[1rem] '>

          <div className='flex flex-row items-baseline justify-between'>
            <Header title="Claims"/>

            <form action="">
                <input type="search" placeholder="Search Claims" className='border-black border-2 rounded-sm w-[20rem] py-[0.5rem] px-[0.25rem] bg-[#D9D9D9]' />
            </form>
          </div>


          <div className='flex flex-row border-black border-2 rounded-md justify-between mt-[2rem] items-center p-[0.5rem] bg-[#D9D9D9]'>
            <div className='ml-[1rem] items-left'>
                <p className='text-[1.75rem]'>Travel</p>
                <p>Staus: </p>
            </div>
              
            <p className='text-[1.75rem]'>£500.00</p>

            <div className='mr-[1rem] flex flex-col items-center'>
                <p className='text-m text-[#1E9CE9]'>Tue 12 Mar 2023</p>
                <Button text="View VAT Receipt" style="w-[10rem]"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmployeeClaims;
