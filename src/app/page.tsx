import { CheckboxGroup } from './components/CheckboxGroup';
import { roundGroup } from './data';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center px-4 py-16'>
      <h1>Dice Sheet</h1>
      <div className='sheet flex flex-row w-full justify-between'>
        <section className='button-group flex flex-col gap-4'>
          <button className='h-10 w-10 bg-gray-100'></button>
          <button className='h-10 w-10 bg-gray-100'></button>
          <button className='h-10 w-10 bg-gray-100'></button>
        </section>
        <section className='checkbox-group flex flex-row w-full justify-around'>
          <CheckboxGroup checkboxes={roundGroup} />
        </section>
      </div>
    </main>
  );
}
