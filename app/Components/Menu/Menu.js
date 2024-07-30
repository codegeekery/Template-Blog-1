import Link from "next/link"

export default function Menu() {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-24'>
                <Link href={'/'}>
                    <h1 className='text-5xl font-bold cursor-pointer'>mindful</h1>
                </Link>
                <span>healthy mind,healthy life</span>
            </div>
        </>
    )
}