import Image from 'next/image'
import Link from 'next/link';

export default function Market() {
    let products: ProductProps[] = [
        {
            title: "Hello world",
            price: 10
        },
        {
            title: "hehe haha",
            price: 69
        },
        {
            title: "hehe hahahehe hahahehe hahahehe hahahehe hahahehe haha",
            price: 69
        },
        {
            title: "hehe haha",
            price: 69
        },
        {
            title: "hehe haha",
            price: 69
        },
        {
            title: "hehe haha",
            price: 69
        },
        {
            title: "hehe haha",
            price: 69
        },{
            title: "hehe haha",
            price: 69
        }
    ];

  return (
    <>
        <div className='flex flex-row items-center'>
            <h1 className='text-5xl text-black m-4'>
                Market
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black h-7 w-7" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
        </div>
        <div className='flex flex-row flex-wrap gap-7 items-center justify-around'>
            {products.map((prod)=>{
                return <ProductCard productDetails={prod}/>
            })}
        </div>
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
