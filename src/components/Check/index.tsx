import Image from 'next/image';

export function Check() {
  return (
        <div className='flex items-center justify-center p-[5px] bg-crayola-50 border border-crayola rounded-lg w-5 h-5'>
            <Image
                src="/assets/icon-check.svg"
                alt="Check"
                width={14}
                height={14}
            />
        </div>
  );
}
