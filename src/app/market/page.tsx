import Image from 'next/image'
import Link from 'next/link';

export default function Market() {
   
  return (
    <>
        
    </>
  )
}

interface ProductProps{
    title: String;
    price: number;
}

function ProductCard(props: {productDetails: ProductProps}) {
    let {productDetails} = props;
    return(
        <div className='w-72 h-72 rounded-2xl bg-white shrink-0 transition overflow-hidden shadow-md hover:translate-z-24'>
            <Link href="/dashboard">
                <Image
                src="/test.png"
                alt="Vercel Logo"
                className="bg-fixed h-4/5 object-cover"
                height={500}
                width={500}
                loading={"lazy"}
                />
                <div className='h-1/5 flex flex-row justify-between p-1'>
                    <div className='flex flex-col justify-between'>
                        <h2 className='max-w-4/5 text-black text-2xl  text-ellipsis'>
                            {productDetails.title}
                        </h2>
                        <h3 className='text-sm text-slate-500'>
                            3 Hours Ago
                        </h3>
                    </div>
                    <div className='flex items-center h-full '>
                        <h3 className='text-black text-2xl  '>
                                ${productDetails.price}
                        </h3>
                    </div>
                    
                </div>
                
            </Link>
        </div>
    )
}
