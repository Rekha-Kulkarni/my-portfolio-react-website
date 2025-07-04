import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} className="pr-1" /> Linkedn
                </>
            ),
            href: 'https://www.linkedin.com/in/rekha-kulkarni-372670a3/',
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} className="pr-1" />
                    GitHub
                </>
            ),
            href: 'https://github.com/Rekha-Kulkarni',
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={30} />
                    Email
                </>
            ),
            href: 'mailto:kulkarni.rekha@hotmail.com',
        },
    ]

    return (
        <div>
            <ul className="flex flex-row justify-center text-cyan-500 bg-gray-800">
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            'w-40 h-14 px-4 lg:text-xl hover:scale-105  hover:text-white duration-200 p-3 cursor-pointer'
                        }
                    >
                        <a
                            className="flex justify-space-around items-center w-full px-4"
                            href={href}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
            <p className="p-10 text-md text-center text-bold text-white bg-gray-800">
                Build with 💙 and ☕️ by Rekha Kulkarni
            </p>
        </div>
    )
}

export default SocialLinks