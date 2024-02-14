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
            <span className='bg-black w-auto block'>
              <svg
                className='h-4 w-4'
                fill='white'
                clip-rule='evenodd'
                fill-rule='evenodd'
                stroke-linejoin='round'
                stroke-miterlimit='2'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='m21.897 13.404.008-.057v.002c.024-.178.044-.357.058-.537.024-.302-.189-.811-.749-.811-.391 0-.715.3-.747.69-.018.221-.044.44-.078.656-.645 4.051-4.158 7.153-8.391 7.153-3.037 0-5.704-1.597-7.206-3.995l1.991-.005c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.033c-.414 0-.75.336-.75.75v4.049c0 .414.336.75.75.75s.75-.335.75-.75l.003-2.525c1.765 2.836 4.911 4.726 8.495 4.726 5.042 0 9.217-3.741 9.899-8.596zm-19.774-2.974-.009.056v-.002c-.035.233-.063.469-.082.708-.024.302.189.811.749.811.391 0 .715-.3.747-.69.022-.28.058-.556.107-.827.716-3.968 4.189-6.982 8.362-6.982 3.037 0 5.704 1.597 7.206 3.995l-1.991.005c-.414 0-.75.336-.75.75s.336.75.75.75h4.033c.414 0 .75-.336.75-.75v-4.049c0-.414-.336-.75-.75-.75s-.75.335-.75.75l-.003 2.525c-1.765-2.836-4.911-4.726-8.495-4.726-4.984 0-9.12 3.654-9.874 8.426z'
                  fill-rule='nonzero'
                />
              </svg>
            </span>
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
