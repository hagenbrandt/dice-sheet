export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center px-4 py-16'>
      <h1>Dice Sheet</h1>
      <div className='sheet flex flex-row w-full justify-between'>
        <section className='button-group flex flex-col gap-4'>
          <button className='h-12 w-12 bg-gray-100'></button>
          <button className='h-12 w-12 bg-gray-100'></button>
          <button className='h-12 w-12 bg-gray-100'></button>
        </section>
        <section className='checkbox-group flex flex-row w-full justify-around'>
          <label
            htmlFor='checkbox-1'
            className='flex flex-col w-fit items-center'
          >
            1
            <input type='checkbox' name='bonus' id='checkbox-1' />
          </label>
          <label
            htmlFor='checkbox-2'
            className='flex flex-col w-fit items-center'
          >
            1
            <input type='checkbox' name='bonus' id='checkbox-2' />
          </label>
          <label
            htmlFor='checkbox-3'
            className='flex flex-col w-fit items-center'
          >
            1
            <input type='checkbox' name='bonus' id='checkbox-3' />
          </label>
          <label
            htmlFor='checkbox-4'
            className='flex flex-col w-fit items-center'
          >
            1
            <input type='checkbox' name='bonus' id='checkbox-4' />
          </label>
          <label
            htmlFor='checkbox-5'
            className='flex flex-col w-fit items-center'
          >
            1
            <input type='checkbox' name='bonus' id='checkbox-5' />
          </label>
          <label
            htmlFor='checkbox-6'
            className='flex flex-col w-fit items-center'
          >
            1
            <input type='checkbox' name='bonus' id='checkbox-6' />
          </label>
        </section>
      </div>
    </main>
  );
}
