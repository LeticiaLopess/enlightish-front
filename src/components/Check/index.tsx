import Image from 'next/image';

export function Check() {
  return (
        <div className='flex items-center justify-center p-1.5 bg-crayola-50 border border-crayola rounded-lg w-6 h-6'>
            <Image
                src="/assets/icon-check.svg"
                alt="Check"
                width={12}
                height={12}
            />
        </div>
  );
}
