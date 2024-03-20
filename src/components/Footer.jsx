import { FaXTwitter, FaSquareInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around p-5 md:p-10 md:mt-10">
            <ul className="flex flex-col md:flex-row items-center gap-x-10 mb-5 md:mb-0">
                <li><span className="font-bold">Reco<span className="font-bold text-yellow-300">Bee</span> </span>2024. All rights Reserved</li>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
            </ul>
            <ul className="flex items-center gap-x-10 text-xl">
                <li><FaXTwitter/></li>
                <li><FaSquareInstagram/></li>
                <li><FaYoutube/></li>
            </ul>
        </div>
    )
}

