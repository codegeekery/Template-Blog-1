// app/Components/Menu/Menu.js:
import Link from "next/link"

export default function Menu() {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-24'>
                <Link href={'/'}>
                    <h1 className='text-5xl font-bold cursor-pointer'>consciente</h1>
                </Link>
                <span>mente sana, vida sana</span>
            </div>
        </>
    )
}